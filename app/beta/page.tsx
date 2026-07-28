import type { Metadata } from 'next';
import Image from 'next/image';
import { Nav } from '../components/Nav';
import { Footer } from '../components/Footer';

export const metadata: Metadata = {
  title: 'Download the Beta',
  description:
    'Get early access to the Framelight beta. Join instantly on iPhone through TestFlight, or request access to the Android test on Google Play.',
  alternates: {
    canonical: '/beta',
  },
};

const BETA_EMAIL = 'team@framelight.ai';
const TESTFLIGHT_URL = 'https://testflight.apple.com/join/nDX5hxf1';
const ANDROID_TEST_URL = 'https://play.google.com/apps/testing/ai.framelight.mobile';
const ANDROID_STORE_URL =
  'https://play.google.com/store/apps/details?id=ai.framelight.mobile';
const DISCORD_URL = 'https://discord.gg/cN3VDRbzXz';
const REQUEST_MAILTO = `mailto:${BETA_EMAIL}?subject=${encodeURIComponent(
  'Android beta access'
)}&body=${encodeURIComponent(
  "Hi Framelight team,\n\nI'd like to join the Android beta.\n\nName:\nGoogle account email:\n\nThanks!"
)}`;

const linkClass = 'text-black/80 underline hover:text-black transition-colors';

function Step({ n, children }: { n: number; children: React.ReactNode }) {
  return (
    <li className="flex gap-3.5">
      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-black/15 font-sans text-[11px] font-semibold text-black/60">
        {n}
      </span>
      <p className="text-[15px] leading-[1.6] text-black/65">{children}</p>
    </li>
  );
}

function PlatformIcon({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#2d2d2d]">
      {children}
    </div>
  );
}

export default function Beta() {
  return (
    <div className="min-h-screen bg-[#f5f1eb] text-[#2d2d2d] overflow-x-hidden">
      <Nav />
      <main className="pt-32 pb-24 px-5 sm:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-14 md:mb-16">
            <div className="relative mx-auto mb-7 h-16 w-16 overflow-hidden rounded-2xl border border-black/[0.06] bg-white shadow-[0_10px_30px_-12px_rgba(0,0,0,0.2)]">
              <Image
                src="/framelight-icon.png"
                alt="Framelight app icon"
                fill
                sizes="64px"
                className="object-contain"
              />
            </div>
            <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-black/50 mb-5 font-medium">
              Beta access
            </p>
            <h1 className="font-serif font-normal text-[clamp(2.25rem,5.5vw,3.5rem)] leading-[1.02] tracking-[-0.025em] mb-5">
              Get the Framelight beta.
            </h1>
            <p className="text-[17px] text-black/55 leading-[1.55]">
              Framelight is in private beta on iOS and Android. Pick your
              platform below — you&apos;ll be shooting better frames in
              minutes.
            </p>
          </div>

          {/* Platform cards */}
          <div className="grid md:grid-cols-2 gap-4 md:gap-6 items-stretch">
            {/* iOS */}
            <div className="flex flex-col rounded-[28px] border border-black/[0.06] bg-white p-7 md:p-9 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_24px_50px_-30px_rgba(0,0,0,0.15)]">
              <div className="mb-6 flex items-center gap-4">
                <PlatformIcon>
                  <svg
                    aria-hidden
                    viewBox="0 0 24 24"
                    className="h-5 w-5 fill-[#f5f1eb]"
                  >
                    <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.03 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.56-1.702" />
                  </svg>
                </PlatformIcon>
                <div>
                  <h2 className="font-serif text-[26px] leading-tight tracking-[-0.015em]">
                    On iPhone
                  </h2>
                  <p className="font-sans text-[13px] text-black/50">
                    Instant access through TestFlight
                  </p>
                </div>
              </div>

              <ol className="space-y-4 mb-8">
                <Step n={1}>Open the invite link below on your iPhone.</Step>
                <Step n={2}>
                  Install TestFlight if prompted, then tap{' '}
                  <strong className="font-medium text-black/80">Accept</strong>.
                </Step>
                <Step n={3}>Download Framelight and start shooting.</Step>
              </ol>

              <div className="mt-auto">
                <a
                  href={TESTFLIGHT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex w-full items-center justify-center gap-2 rounded-full bg-[#2d2d2d] px-6 py-3.5 font-sans text-[14px] font-medium text-[#f5f1eb] transition-colors hover:bg-black"
                >
                  Join the beta on TestFlight
                  <span
                    aria-hidden
                    className="opacity-60 transition-transform group-hover:translate-x-0.5"
                  >
                    →
                  </span>
                </a>

                <div className="mt-6 hidden md:flex items-center justify-center gap-4 rounded-2xl border border-black/[0.06] bg-[#f5f1eb]/60 p-4">
                  <Image
                    src="/images/testflight-qr.png"
                    alt="QR code for the Framelight TestFlight invite"
                    width={96}
                    height={96}
                    className="h-24 w-24 rounded-lg border border-black/[0.06] bg-white"
                  />
                  <p className="max-w-[180px] font-sans text-[12.5px] leading-[1.5] text-black/55">
                    On a computer? Scan with your iPhone camera to open the
                    invite.
                  </p>
                </div>
              </div>
            </div>

            {/* Android */}
            <div className="flex flex-col rounded-[28px] border border-black/[0.06] bg-white p-7 md:p-9 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_24px_50px_-30px_rgba(0,0,0,0.15)]">
              <div className="mb-6 flex items-center gap-4">
                <PlatformIcon>
                  <svg
                    aria-hidden
                    viewBox="0 0 24 24"
                    className="h-5 w-5 fill-[#f5f1eb]"
                  >
                    <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993.0001.5511-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993 0 .5511-.4482.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.5902 8.2439 13.8533 7.8508 12 7.8508s-3.5902.3931-5.1367 1.0989L4.841 5.4467a.4161.4161 0 00-.5677-.1521.4157.4157 0 00-.1521.5676l1.9973 3.4592C2.6889 11.1867.3432 14.6589 0 18.761h24c-.3435-4.1021-2.6892-7.5743-6.1185-9.4396" />
                  </svg>
                </PlatformIcon>
                <div>
                  <h2 className="font-serif text-[26px] leading-tight tracking-[-0.015em]">
                    On Android
                  </h2>
                  <p className="font-sans text-[13px] text-black/50">
                    Access granted by hand — request it below
                  </p>
                </div>
              </div>

              <ol className="space-y-4 mb-8">
                <Step n={1}>
                  Email us your name and Google account email — we&apos;ll add
                  you to the tester list.
                </Step>
                <Step n={2}>
                  Once you hear back,{' '}
                  <a
                    href={ANDROID_TEST_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClass}
                  >
                    join the Android test
                  </a>{' '}
                  with that Google account.
                </Step>
                <Step n={3}>
                  <a
                    href={ANDROID_STORE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClass}
                  >
                    Download Framelight on Google Play
                  </a>{' '}
                  and start shooting.
                </Step>
              </ol>

              <div className="mt-auto">
                <a
                  href={REQUEST_MAILTO}
                  className="group flex w-full items-center justify-center gap-2 rounded-full bg-[#2d2d2d] px-6 py-3.5 font-sans text-[14px] font-medium text-[#f5f1eb] transition-colors hover:bg-black"
                >
                  Request access by email
                  <span
                    aria-hidden
                    className="opacity-60 transition-transform group-hover:translate-x-0.5"
                  >
                    →
                  </span>
                </a>
                <p className="mt-4 text-center font-sans text-[12.5px] text-black/45">
                  Or write to{' '}
                  <a href={`mailto:${BETA_EMAIL}`} className={linkClass}>
                    {BETA_EMAIL}
                  </a>{' '}
                  with your name and email.
                </p>
              </div>
            </div>
          </div>

          {/* Help */}
          <p className="mt-12 text-center text-[15px] text-black/55 leading-[1.6]">
            Stuck, or something not working? Email{' '}
            <a href={`mailto:${BETA_EMAIL}`} className={linkClass}>
              {BETA_EMAIL}
            </a>{' '}
            or ask in our{' '}
            <a
              href={DISCORD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              Discord
            </a>
            {' '}— we read everything.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
