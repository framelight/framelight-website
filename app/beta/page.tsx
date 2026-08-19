import type { Metadata } from 'next';
import Image from 'next/image';
import { Nav } from '../components/Nav';
import { Footer } from '../components/Footer';
import { StoreBadges } from '../components/StoreBadges';
import { DISCORD_URL } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Download Framelight',
  description:
    'Download Framelight from the App Store or Google Play and get real-time, on-device composition guidance.',
  alternates: {
    canonical: '/beta',
  },
};

const CONTACT_EMAIL = 'team@framelight.ai';
const linkClass = 'text-black/80 underline hover:text-black transition-colors';

export default function Beta() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f5f1eb] text-[#2d2d2d]">
      <Nav />
      <main className="px-5 pb-24 pt-32 sm:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[#fde2c4] via-[#fbd0d8] to-[#cfd8f5] p-8 text-center shadow-[0_30px_80px_-20px_rgba(0,0,0,0.18)] md:p-16">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-[0.07]"
              style={{
                backgroundImage:
                  'radial-gradient(circle at 20% 20%, rgba(0,0,0,0.6), transparent 50%)',
              }}
            />

            <div className="relative">
              <div className="relative mx-auto mb-7 h-20 w-20 overflow-hidden rounded-[22px] border border-white/60 bg-white shadow-[0_12px_30px_-16px_rgba(0,0,0,0.25)]">
                <Image
                  src="/framelight-icon.png"
                  alt="Framelight app icon"
                  fill
                  priority
                  sizes="80px"
                  className="object-contain"
                />
              </div>

              <p className="mb-5 font-sans text-[11px] font-medium uppercase tracking-[0.18em] text-black/50">
                Available now
              </p>
              <h1 className="mb-5 font-serif text-[clamp(2.4rem,6vw,4.5rem)] font-normal leading-[1.02] tracking-[-0.03em]">
                Download Framelight.
              </h1>
              <p className="mx-auto mb-10 max-w-xl text-[17px] leading-[1.6] text-black/60">
                Framelight is available on the App Store and Google Play.
                Choose your platform and start capturing better-framed photos
                today.
              </p>

              <StoreBadges className="justify-center" priority />
            </div>
          </div>

          <p className="mt-10 text-center text-[15px] leading-[1.6] text-black/55">
            Need help? Email{' '}
            <a href={`mailto:${CONTACT_EMAIL}`} className={linkClass}>
              {CONTACT_EMAIL}
            </a>{' '}
            or join the{' '}
            <a
              href={DISCORD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              Framelight Community
            </a>
            .
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
