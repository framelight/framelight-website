import { chromium } from 'playwright';
import { mkdir } from 'node:fs/promises';

const URL = process.env.TEST_URL ?? 'http://localhost:3000';

await mkdir('scripts/screenshots', { recursive: true });

const browser = await chromium.launch();

// Mobile full-page
{
  const page = await browser.newPage({
    viewport: { width: 390, height: 844 },
    deviceScaleFactor: 2,
  });
  await page.goto(URL, { waitUntil: 'networkidle', timeout: 60000 });
  await page.addStyleTag({
    content: 'html, body { scroll-behavior: auto !important; } * { transition: none !important; }',
  });

  // fire reveals
  await page.evaluate(async () => {
    const total = document.body.scrollHeight;
    for (let i = 1; i <= 20; i++) {
      window.scrollTo(0, (total * i) / 20);
      await new Promise((r) => setTimeout(r, 100));
    }
    window.scrollTo(0, 0);
    await new Promise((r) => setTimeout(r, 400));
  });

  await page.screenshot({
    path: 'scripts/screenshots/final-mobile.png',
    fullPage: true,
  });
  await page.close();
}

// Desktop full-page
{
  const page = await browser.newPage({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 1,
  });
  await page.goto(URL, { waitUntil: 'networkidle', timeout: 60000 });
  await page.addStyleTag({
    content: 'html, body { scroll-behavior: auto !important; } * { transition: none !important; }',
  });
  await page.evaluate(async () => {
    const total = document.body.scrollHeight;
    for (let i = 1; i <= 20; i++) {
      window.scrollTo(0, (total * i) / 20);
      await new Promise((r) => setTimeout(r, 100));
    }
    window.scrollTo(0, 0);
    await new Promise((r) => setTimeout(r, 400));
  });
  await page.screenshot({
    path: 'scripts/screenshots/final-desktop.png',
    fullPage: true,
  });
  await page.close();
}

await browser.close();
console.log('Final screenshots saved');
