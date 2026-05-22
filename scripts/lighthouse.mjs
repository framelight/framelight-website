import { chromium } from 'playwright';
import lighthouse from 'lighthouse';

const URL = process.env.TEST_URL ?? 'http://localhost:3010';

const browser = await chromium.launch({
  args: ['--remote-debugging-port=9223'],
});
const ctx = await browser.newContext();
const page = await ctx.newPage();
await page.goto(URL, { waitUntil: 'networkidle', timeout: 60000 });

const runs = [
  { name: 'mobile', formFactor: 'mobile', screenEmulation: { mobile: true, width: 390, height: 844, deviceScaleFactor: 2, disabled: false } },
  { name: 'desktop', formFactor: 'desktop', screenEmulation: { mobile: false, width: 1440, height: 900, deviceScaleFactor: 1, disabled: false } },
];

for (const r of runs) {
  const result = await lighthouse(URL, {
    port: 9223,
    output: 'json',
    onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'],
    formFactor: r.formFactor,
    screenEmulation: r.screenEmulation,
    throttling: r.formFactor === 'mobile'
      ? { rttMs: 150, throughputKbps: 1638, cpuSlowdownMultiplier: 4 }
      : { rttMs: 40, throughputKbps: 10240, cpuSlowdownMultiplier: 1 },
    logLevel: 'error',
  });

  const lhr = result.lhr;
  const cats = lhr.categories;
  console.log(`\n=== ${r.name.toUpperCase()} ===`);
  console.log('Performance    :', Math.round(cats.performance.score * 100));
  console.log('Accessibility  :', Math.round(cats.accessibility.score * 100));
  console.log('Best Practices :', Math.round(cats['best-practices'].score * 100));
  console.log('SEO            :', Math.round(cats.seo.score * 100));

  const audits = lhr.audits;
  console.log('LCP            :', audits['largest-contentful-paint'].displayValue);
  console.log('CLS            :', audits['cumulative-layout-shift'].displayValue);
  console.log('TBT            :', audits['total-blocking-time'].displayValue);
  console.log('FCP            :', audits['first-contentful-paint'].displayValue);

  const failedA11y = Object.values(audits).filter(
    (a) => a.score !== null && a.score < 1 && a.scoreDisplayMode !== 'manual' &&
    lhr.categories.accessibility.auditRefs.some((r) => r.id === a.id)
  );
  if (failedA11y.length) {
    console.log('A11y issues:');
    for (const a of failedA11y) {
      console.log('  -', a.id, ':', a.title);
      const items = a.details?.items?.slice(0, 5) ?? [];
      for (const it of items) {
        const sel = it.node?.selector ?? it.selector ?? '?';
        const snip = it.node?.snippet?.slice(0, 140) ?? '';
        console.log('      ·', sel);
        if (snip) console.log('        ', snip);
      }
    }
  }
}

await browser.close();
