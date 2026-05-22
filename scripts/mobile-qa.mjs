import { chromium } from 'playwright';
import { mkdir } from 'node:fs/promises';

const URL = process.env.TEST_URL ?? 'http://localhost:3000';
const VIEWPORTS = [
  { name: 'sm-android', width: 360, height: 800 },
  { name: 'iphone-se', width: 375, height: 667 },
  { name: 'iphone-14', width: 390, height: 844 },
  { name: 'iphone-plus', width: 414, height: 896 },
];

await mkdir('scripts/screenshots', { recursive: true });

const browser = await chromium.launch();
let failures = 0;

for (const vp of VIEWPORTS) {
  const page = await browser.newPage({
    viewport: { width: vp.width, height: vp.height },
    deviceScaleFactor: 2,
  });

  const consoleErrors = [];
  page.on('pageerror', (err) => consoleErrors.push(`pageerror: ${err.message}`));
  page.on('console', (msg) => {
    if (msg.type() === 'error') consoleErrors.push(`console: ${msg.text()}`);
  });

  await page.goto(URL, { waitUntil: 'networkidle', timeout: 60000 });

  // Disable smooth-scroll for deterministic positioning in tests
  await page.addStyleTag({
    content: 'html, body { scroll-behavior: auto !important; }',
  });
  await page.waitForTimeout(500);

  // Detect horizontal overflow
  const overflow = await page.evaluate(() => {
    const body = document.body;
    const root = document.documentElement;
    return {
      bodyScrollWidth: body.scrollWidth,
      htmlScrollWidth: root.scrollWidth,
      viewport: window.innerWidth,
      offending: Array.from(
        document.querySelectorAll('section, header, footer, nav, main')
      )
        .filter((el) => el.scrollWidth > window.innerWidth + 1)
        .map((el) => ({
          tag: el.tagName,
          id: el.id || null,
          sw: el.scrollWidth,
        })),
    };
  });

  // Nav overlap probe
  const navProbe = await page.evaluate(() => {
    const nav = document.querySelector('nav');
    if (!nav) return { ok: false, reason: 'no nav' };
    const logo = nav.querySelector('a[aria-label="Framelight home"]');
    const cta = nav.querySelector('a[href="#waitlist"]');
    if (!logo || !cta) return { ok: false, reason: 'missing logo or cta' };
    const a = logo.getBoundingClientRect();
    const b = cta.getBoundingClientRect();
    const overlaps = !(
      a.right <= b.left ||
      b.right <= a.left ||
      a.bottom <= b.top ||
      b.bottom <= a.top
    );
    return { ok: !overlaps, logo: a, cta: b };
  });

  // 1. Hero at the very top
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(500);
  await page.screenshot({
    path: `scripts/screenshots/${vp.name}-1-hero.png`,
    clip: { x: 0, y: 0, width: vp.width, height: vp.height },
  });

  // Scroll through to fire all reveal animations
  await page.evaluate(async () => {
    const total = document.body.scrollHeight;
    for (let i = 1; i <= 14; i++) {
      window.scrollTo(0, (total * i) / 14);
      await new Promise((r) => setTimeout(r, 150));
    }
  });

  // 2. Problem section
  await page.evaluate(() => {
    const el = document.getElementById('problem');
    if (el)
      window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 40, behavior: 'instant' });
  });
  await page.waitForTimeout(500);
  await page.screenshot({
    path: `scripts/screenshots/${vp.name}-2-problem.png`,
    clip: { x: 0, y: 0, width: vp.width, height: vp.height },
  });

  // 3. Demo (Step 1 in view)
  await page.evaluate(() => {
    const el = document.getElementById('how');
    if (el)
      window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 40, behavior: 'instant' });
  });
  await page.waitForTimeout(500);
  await page.screenshot({
    path: `scripts/screenshots/${vp.name}-3-demo.png`,
    clip: { x: 0, y: 0, width: vp.width, height: vp.height },
  });

  // 4. Use cases
  await page.evaluate(() => {
    const el = document.getElementById('moments');
    if (el)
      window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 40, behavior: 'instant' });
  });
  await page.waitForTimeout(500);
  await page.screenshot({
    path: `scripts/screenshots/${vp.name}-4-moments.png`,
    clip: { x: 0, y: 0, width: vp.width, height: vp.height },
  });

  // 5. Waitlist
  await page.evaluate(() => {
    const el = document.getElementById('waitlist');
    if (el)
      window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 40, behavior: 'instant' });
  });
  await page.waitForTimeout(500);
  await page.screenshot({
    path: `scripts/screenshots/${vp.name}-5-waitlist.png`,
    clip: { x: 0, y: 0, width: vp.width, height: vp.height },
  });

  const overflows = overflow.offending.length > 0;
  const pass = navProbe.ok && !overflows && consoleErrors.length === 0;
  if (!pass) failures++;

  console.log(
    `[${vp.name} ${vp.width}x${vp.height}]`,
    JSON.stringify(
      {
        navOK: navProbe.ok,
        overflows: overflow.offending,
        bodyWidth: overflow.bodyScrollWidth,
        viewport: overflow.viewport,
        consoleErrors,
        pass,
      },
      null,
      2
    )
  );

  await page.close();
}

await browser.close();
if (failures > 0) {
  console.error(`Mobile QA FAILED: ${failures} viewport(s) had issues`);
  process.exit(1);
}
console.log('Mobile QA PASSED for all viewports');
