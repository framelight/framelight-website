import Image from 'next/image';
import { Reveal } from './Reveal';

export function Hero() {
  return (
    <section className="relative px-5 sm:px-8 pt-28 md:pt-36 pb-20 md:pb-32">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-[1.05fr_1fr] gap-10 lg:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <Reveal>
              <div className="inline-flex items-center gap-2 mb-7 pl-1 pr-3 py-1 rounded-full border border-black/10 bg-white/60 backdrop-blur-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-sans text-[11px] font-medium tracking-wide uppercase text-black/70">
                  Private beta · iOS &amp; Android
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 className="font-serif font-normal leading-[0.95] tracking-[-0.035em] text-[clamp(2.75rem,7.5vw,6.25rem)] mb-7">
                From guesswork
                <br />
                to <em className="italic text-black/80">perfect shots.</em>
              </h1>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="text-[17px] md:text-[19px] text-black/60 max-w-[34ch] mb-10 leading-[1.55]">
                Real-time composition cues, on-device. Open the camera, follow a
                single arrow, capture a shot you&apos;d be proud to print.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="#waitlist"
                  className="group px-7 py-3.5 bg-[#2d2d2d] text-[#f5f1eb] rounded-full hover:bg-black transition-all font-sans text-[14px] font-medium inline-flex items-center justify-center gap-2 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/10"
                >
                  Get early access
                  <span
                    aria-hidden
                    className="transition-transform group-hover:translate-x-0.5"
                  >
                    →
                  </span>
                </a>
                <a
                  href="#how"
                  className="px-7 py-3.5 border border-black/15 text-black/80 rounded-full hover:border-black/40 hover:bg-white/60 transition-all font-sans text-[14px] font-medium inline-flex items-center justify-center gap-2"
                >
                  See how it works
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-12 flex items-center gap-6 font-sans text-[12px] text-black/60">
                <div className="flex items-center gap-1.5">
                  <svg
                    aria-hidden
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M12 2L4 6v6c0 5 3.5 9.5 8 10 4.5-.5 8-5 8-10V6l-8-4z" />
                  </svg>
                  100% on-device
                </div>
                <div className="w-px h-3 bg-black/10" />
                <div className="flex items-center gap-1.5">
                  <svg
                    aria-hidden
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                  &lt; 50ms latency
                </div>
              </div>
            </Reveal>
          </div>

          <div className="order-1 lg:order-2 relative">
            <Reveal y={24} delay={0.05}>
              <div className="relative aspect-[4/5] md:aspect-square rounded-[28px] overflow-hidden shadow-[0_30px_60px_-20px_rgba(0,0,0,0.25)]">
                <Image
                  src="/images/hero.jpg"
                  alt="Cherry blossom in soft afternoon light — an example of well-composed photography"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/10 via-transparent to-transparent" />
                <div className="absolute left-5 bottom-5 right-5 flex items-center justify-between font-sans text-[11px] font-medium text-white/90">
                  <span className="tracking-wide uppercase drop-shadow">
                    Rule of thirds · aligned
                  </span>
                  <span className="px-2 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/20 tabular-nums">
                    ƒ/2.8 · 1/250s
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
