import { chromium } from 'playwright';

const BASE_URL = process.env.TEST_URL ?? 'http://localhost:3000';
const APP_STORE_URL =
  'https://apps.apple.com/us/app/framelight/id6785136047';
const GOOGLE_PLAY_URL =
  'https://play.google.com/store/apps/details?id=ai.framelight.mobile';
const DISCORD_URL = 'https://discord.gg/cN3VDRbzXz';

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
const failures = [];

function assert(condition, message) {
  if (!condition) failures.push(message);
}

const consoleErrors = [];
page.on('pageerror', (error) => consoleErrors.push(error.message));
page.on('console', (message) => {
  if (message.type() === 'error') consoleErrors.push(message.text());
});

async function inspectPage(pathname) {
  await page.goto(new URL(pathname, BASE_URL).href, {
    waitUntil: 'networkidle',
    timeout: 60000,
  });

  return page.evaluate(() => {
    const anchors = Array.from(document.querySelectorAll('a'));
    const storeBadges = anchors
      .filter((anchor) =>
        [
          'Download Framelight on the App Store',
          'Get Framelight on Google Play',
        ].includes(anchor.getAttribute('aria-label') ?? '')
      )
      .map((anchor) => ({
        label: anchor.getAttribute('aria-label'),
        href: anchor.getAttribute('href'),
        target: anchor.getAttribute('target'),
        rel: anchor.getAttribute('rel') ?? '',
      }));

    return {
      text: document.body.innerText.replace(/\s+/g, ' ').trim(),
      storeBadges,
      hasDownloadSection: Boolean(document.getElementById('download')),
      hasWaitlistSection: Boolean(document.getElementById('waitlist')),
      betaLinks: anchors
        .map((anchor) => anchor.getAttribute('href'))
        .filter((href) => href === '/beta'),
      discordLinks: anchors
        .map((anchor) => anchor.getAttribute('href'))
        .filter((href) => href?.includes('discord.gg')),
      downloadLinks: anchors
        .filter((anchor) =>
          anchor.textContent?.toLowerCase().includes('download')
        )
        .map((anchor) => ({
          text: anchor.textContent?.replace(/\s+/g, ' ').trim(),
          href: anchor.getAttribute('href'),
        })),
      canonical: document
        .querySelector('link[rel="canonical"]')
        ?.getAttribute('href'),
    };
  });
}

function verifyBadges(badges, expectedCount, context) {
  assert(
    badges.length === expectedCount,
    `${context}: expected ${expectedCount} store badge links, found ${badges.length}`
  );

  for (let index = 0; index < badges.length; index += 2) {
    assert(
      badges[index]?.href === APP_STORE_URL,
      `${context}: App Store badge is missing or not first`
    );
    assert(
      badges[index + 1]?.href === GOOGLE_PLAY_URL,
      `${context}: Google Play badge is missing or not second`
    );
  }

  for (const badge of badges) {
    assert(badge.target === '_blank', `${context}: store link must open safely`);
    assert(
      badge.rel.split(/\s+/).includes('noopener') &&
        badge.rel.split(/\s+/).includes('noreferrer'),
      `${context}: store link is missing noopener/noreferrer`
    );
  }
}

const home = await inspectPage('/');
const staleHomeCopy = [
  'private beta',
  'beta access',
  'test the beta',
  'testflight',
  'early access',
  'join waitlist',
];
for (const phrase of staleHomeCopy) {
  assert(
    !home.text.toLowerCase().includes(phrase),
    `home: stale launch copy remains: "${phrase}"`
  );
}
assert(home.hasDownloadSection, 'home: #download section is missing');
assert(!home.hasWaitlistSection, 'home: retired #waitlist section remains');
assert(home.betaLinks.length === 0, 'home: visible /beta link remains');
assert(
  home.discordLinks.length > 0 &&
    home.discordLinks.every((href) => href === DISCORD_URL),
  'home: Discord links are not canonical'
);
assert(
  home.text.includes('Community') && home.text.includes('Join the community'),
  'home: Community card launch copy is missing'
);
assert(
  home.downloadLinks.every(({ href }) =>
    ['#download', '/#download', APP_STORE_URL].includes(href)
  ),
  'home: a download CTA points outside the public download flow'
);
verifyBadges(home.storeBadges, 4, 'home');

const beta = await inspectPage('/beta');
assert(
  beta.text.toLowerCase().includes('download framelight.') &&
    beta.text.toLowerCase().includes('available now'),
  '/beta: public download copy is missing'
);
for (const phrase of ['testflight', 'manual access', 'beta request']) {
  assert(
    !beta.text.toLowerCase().includes(phrase),
    `/beta: obsolete copy remains: "${phrase}"`
  );
}
assert(beta.betaLinks.length === 0, '/beta: visible internal /beta link remains');
assert(
  beta.canonical?.endsWith('/beta'),
  `/beta: canonical URL is missing or incorrect (${beta.canonical ?? 'none'})`
);
assert(
  beta.discordLinks.length > 0 &&
    beta.discordLinks.every((href) => href === DISCORD_URL),
  '/beta: Discord link is not canonical'
);
assert(
  beta.downloadLinks.every(({ href }) =>
    ['/#download', APP_STORE_URL].includes(href)
  ),
  '/beta: a download link points outside the public download flow'
);
verifyBadges(beta.storeBadges, 2, '/beta');

assert(
  consoleErrors.length === 0,
  `browser console errors: ${consoleErrors.join(' | ')}`
);

await browser.close();

if (failures.length > 0) {
  console.error(`Launch QA FAILED (${failures.length})`);
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log('Launch QA PASSED: copy, routes, store badges, anchors, and Discord links');
