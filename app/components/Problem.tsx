import Image from 'next/image';
import { Reveal } from './Reveal';

export function Problem() {
  return (
    <section id="problem" className="relative py-24 md:py-32 px-5 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="bg-white rounded-3xl p-8 md:p-16 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_20px_40px_-20px_rgba(0,0,0,0.08)] border border-black/[0.04]">
            <div className="grid md:grid-cols-[1fr_1fr] gap-10 md:gap-16 items-center">
              <div>
                <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-black/55 mb-5 font-medium">
                  The problem
                </p>
                <h2 className="font-serif font-normal text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.02] tracking-[-0.025em] mb-7">
                  Most photos,
                  <br />
                  <em className="italic text-black/35">imperfect composition.</em>
                </h2>
                <p className="text-[17px] text-black/55 leading-[1.6] mb-5">
                  Subject too centered. Horizon a few degrees off. Someone clipped
                  at the edge of the frame.
                </p>
                <p className="text-[17px] text-[#2d2d2d] leading-[1.6]">
                  By the time you notice, the moment is gone.
                </p>
              </div>

              <Reveal y={24} delay={0.1}>
                <div className="relative flex justify-center">
                  <div className="relative bg-[#f0ebe2] rounded-2xl overflow-hidden aspect-[3/4] w-full max-w-sm shadow-[0_20px_40px_-20px_rgba(0,0,0,0.25)]">
                    <Image
                      src="/images/bad.jpg"
                      alt="A photo with off-center composition"
                      fill
                      sizes="(max-width: 768px) 100vw, 400px"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40" />
                    <div
                      aria-hidden
                      className="absolute inset-5 border border-dashed border-red-400/80 rounded-lg"
                    />
                    <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-red-500/95 text-white font-sans text-[10px] font-medium tracking-wide uppercase shadow-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-white" />
                      Off-balance
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
