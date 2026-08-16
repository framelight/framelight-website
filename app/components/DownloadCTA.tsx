import Image from 'next/image';
import { Reveal } from './Reveal';
import { StoreBadges } from './StoreBadges';

export function DownloadCTA() {
  return (
    <section id="download" className="relative py-24 md:py-32 px-5 sm:px-8">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[#fde2c4] via-[#fbd0d8] to-[#cfd8f5] p-8 text-center shadow-[0_30px_80px_-20px_rgba(0,0,0,0.18)] md:p-16">
            <div
              aria-hidden
              className="absolute inset-0 opacity-[0.07] pointer-events-none"
              style={{
                backgroundImage:
                  'radial-gradient(circle at 20% 20%, rgba(0,0,0,0.6), transparent 50%)',
              }}
            />

            <div className="relative">
              <div className="relative mx-auto mb-7 h-16 w-16 overflow-hidden rounded-2xl border border-white/60 bg-white shadow-[0_12px_30px_-16px_rgba(0,0,0,0.25)]">
                <Image
                  src="/framelight-icon.png"
                  alt="Framelight app icon"
                  fill
                  sizes="64px"
                  className="object-contain"
                />
              </div>

              <p className="mb-5 font-sans text-[11px] font-medium uppercase tracking-[0.18em] text-black/50">
                Available now
              </p>

              <h2 className="mb-5 font-serif text-[clamp(2rem,5vw,3.75rem)] font-normal leading-[1.02] tracking-[-0.025em]">
                Start capturing
                <br />
                <em className="italic">better moments today.</em>
              </h2>

              <p className="mx-auto mb-9 max-w-lg text-[16px] leading-[1.55] text-black/60 md:text-[17px]">
                Download Framelight from the App Store or Google Play and start
                framing better photos today.
              </p>

              <StoreBadges className="justify-center" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
