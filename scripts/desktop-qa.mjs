import { chromium } from 'playwright';
import { mkdir } from 'node:fs/promises';

const URL = process.env.TEST_URL ?? 'http://localhost:3000';

await mkdir('scripts/screenshots', { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage({
  viewport: { width: 1440, height: 900 },
  deviceScaleFactor: 1.5,
});

const errors = [];
page.on('pageerror', (e) => errors.push(`pageerror: ${e.message}`));
page.on('console', (m) => {
  if (m.type() === 'error') errors.push(`console: ${m.text()}`);
});

await page.goto(URL, { waitUntil: 'networkidle', timeout: 60000 });
await page.addStyleTag({
  content: 'html, body { scroll-behavior: auto !important; }',
});
await page.waitForTimeout(500);

const sections = [
  { id: null, file: 'desktop-1-hero' },
  { id: 'problem', file: 'desktop-2-problem' },
  { id: 'how', file: 'desktop-3-demo' },
  { id: 'moments', file: 'desktop-4-moments' },
  { id: 'waitlist', file: 'desktop-5-waitlist' },
];

// fire reveals first
await page.evaluate(async () => {
  const total = document.body.scrollHeight;
  for (let i = 1; i <= 14; i++) {
    window.scrollTo(0, (total * i) / 14);
    await new Promise((r) => setTimeout(r, 120));
  }
});

for (const s of sections) {
  if (s.id === null) {
    await page.evaluate(() => window.scrollTo(0, 0));
  } else {
    await page.evaluate((id) => {
      const el = document.getElementById(id);
      if (el)
        window.scrollTo({
          top: el.getBoundingClientRect().top + window.scrollY - 40,
          behavior: 'instant',
        });
    }, s.id);
  }
  await page.waitForTimeout(500);
  await page.screenshot({
    path: `scripts/screenshots/${s.file}.png`,
    clip: { x: 0, y: 0, width: 1440, height: 900 },
  });
}

const overflow = await page.evaluate(() => ({
  body: document.body.scrollWidth,
  vp: window.innerWidth,
}));

console.log(JSON.stringify({ errors, overflow }, null, 2));
await browser.close();
