'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';
import { Check } from 'lucide-react';
import { Reveal } from './Reveal';

const STEPS = [
  {
    n: '01',
    title: 'Grid appears instantly',
    body:
      'The moment you open your camera, Framelight overlays subtle composition guides. The rule of thirds shows exactly where to position your subject for maximum impact.',
  },
  {
    n: '02',
    title: 'Simple arrows guide you',
    body:
      'Clear directions like "tilt up" or "move left" appear on screen. No confusing jargon — just guidance anyone can follow in a single glance.',
  },
  {
    n: '03',
    title: 'Perfect composition, confirmed',
    body:
      'When everything aligns, the screen confirms your composition is balanced. Capture the moment with complete confidence.',
  },
];

export function Demo() {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const gridOpacity = useTransform(
    scrollYProgress,
    [0.18, 0.32, 0.45, 0.55],
    [0, 0.35, 0.35, 0]
  );
  const arrowOpacity = useTransform(
    scrollYProgress,
    [0.42, 0.52, 0.6, 0.7],
    [0, 1, 1, 0]
  );
  const perfectOpacity = useTransform(
    scrollYProgress,
    [0.6, 0.7, 0.85, 0.95],
    [0, 1, 1, 0.6]
  );

  const step1Opacity = useTransform(
    scrollYProgress,
    [0.18, 0.3, 0.45, 0.55],
    [0.2, 1, 1, 0.25]
  );
  const step2Opacity = useTransform(
    scrollYProgress,
    [0.42, 0.55, 0.62, 0.72],
    [0.25, 1, 1, 0.25]
  );
  const step3Opacity = useTransform(
    scrollYProgress,
    [0.62, 0.75, 0.85, 0.95],
    [0.25, 1, 1, 1]
  );

  const stepOpacities = reduce
    ? [1, 1, 1]
    : [step1Opacity, step2Opacity, step3Opacity];

  return (
    <section
      ref={sectionRef}
      id="how"
      className="relative py-24 md:py-32 px-5 sm:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-24 max-w-3xl mx-auto">
          <Reveal>
            <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-black/55 mb-5 font-medium">
              The solution
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-serif font-normal text-[clamp(2.25rem,5.5vw,4.25rem)] leading-[1] tracking-[-0.03em] mb-6">
              Framelight guides you
              <br />
              <em className="italic">in real time.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="font-sans text-black/55 text-[13px] tracking-wide uppercase">
              Scroll to see how it works
            </p>
          </Reveal>
        </div>

        <div className="grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-20 items-start">
          <div className="lg:sticky lg:top-28 flex justify-center order-1 lg:order-1">
            <div className="relative w-full max-w-[280px]">
              <div className="relative bg-[#0b0b0d] rounded-[2.75rem] p-2.5 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.35)] ring-1 ring-black/10">
                <div className="relative bg-black rounded-[2.25rem] overflow-hidden aspect-[9/19.5]">
                  <Image
                    src="/images/phone-landscape.jpg"
                    alt="Mountain landscape viewed through a camera"
                    fill
                    sizes="280px"
                    className="object-cover"
                  />

                  <motion.div
                    aria-hidden
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      opacity: reduce ? 0.3 : gridOpacity,
                      backgroundImage: `
                        repeating-linear-gradient(0deg, transparent, transparent calc(33.333% - 1px), rgba(255,255,255,0.55) calc(33.333% - 1px), rgba(255,255,255,0.55) 33.333%, transparent 33.333%),
                        repeating-linear-gradient(90deg, transparent, transparent calc(33.333% - 1px), rgba(255,255,255,0.55) calc(33.333% - 1px), rgba(255,255,255,0.55) 33.333%, transparent 33.333%)
                      `,
                    }}
                  />

                  <motion.div
                    aria-hidden
                    className="absolute inset-0 flex flex-col items-center pt-[28%] gap-3 pointer-events-none"
                    style={{ opacity: reduce ? 0 : arrowOpacity }}
                  >
                    <motion.div
                      className="bg-white text-black rounded-full w-14 h-14 flex items-center justify-center text-2xl shadow-xl"
                      animate={reduce ? undefined : { y: [0, -6, 0] }}
                      transition={
                        reduce
                          ? undefined
                          : { duration: 1.6, repeat: Infinity, ease: 'easeInOut' }
                      }
                    >
                      ↑
                    </motion.div>
                    <div className="bg-black/85 backdrop-blur px-3.5 py-1.5 rounded-full font-sans text-[11px] font-medium text-white shadow-lg">
                      Tilt up 10°
                    </div>
                  </motion.div>

                  <motion.div
                    aria-hidden
                    className="absolute inset-0 flex items-center justify-center pointer-events-none"
                    style={{ opacity: reduce ? 0 : perfectOpacity }}
                  >
                    <div className="bg-white/95 backdrop-blur-xl rounded-2xl px-5 py-4 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.4)] flex items-center gap-3 font-sans">
                      <div className="w-9 h-9 rounded-full bg-emerald-500 flex items-center justify-center">
                        <Check className="w-5 h-5 text-white" strokeWidth={3} />
                      </div>
                      <div>
                        <div className="text-[14px] font-medium text-black leading-tight">
                          Composition locked
                        </div>
                        <div className="text-[11px] text-black/50">
                          Tap to capture
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  <div
                    aria-hidden
                    className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black/55 to-transparent pointer-events-none"
                  />
                  <div className="absolute top-[52px] left-3 right-3 flex items-center justify-between font-sans text-[10px] font-medium px-2">
                    <div className="flex items-center gap-1.5 text-white">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.8)]" />
                      <span className="drop-shadow tracking-wide">FRAMELIGHT</span>
                    </div>
                    <span className="text-white drop-shadow tabular-nums">16:9</span>
                  </div>

                  <div className="absolute bottom-6 left-0 right-0 flex items-center justify-center gap-8">
                    <div className="w-8 h-8 rounded-md bg-white/20 backdrop-blur-sm" />
                    <div className="relative">
                      <div className="w-[60px] h-[60px] rounded-full border-[3px] border-white/90 flex items-center justify-center">
                        <div className="w-[48px] h-[48px] rounded-full bg-white" />
                      </div>
                    </div>
                    <div className="w-8 h-8 rounded-md bg-white/20 backdrop-blur-sm overflow-hidden">
                      <Image
                        src="/images/hero.jpg"
                        alt=""
                        width={32}
                        height={32}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>
                </div>

                <div
                  aria-hidden
                  className="absolute top-[18px] left-1/2 -translate-x-1/2 w-[88px] h-[26px] bg-black rounded-full"
                />
              </div>

              <div
                aria-hidden
                className="absolute -z-10 inset-0 translate-y-8 scale-95 blur-2xl bg-gradient-to-br from-amber-200/40 via-pink-200/30 to-blue-200/40 rounded-full"
              />
            </div>
          </div>

          <div className="space-y-[26vh] pb-[20vh] order-2 lg:order-2">
            {STEPS.map((s, i) => {
              const opacity = stepOpacities[i];
              return (
                <motion.div
                  key={s.n}
                  style={
                    reduce
                      ? undefined
                      : { opacity: opacity as unknown as number }
                  }
                >
                  <div className="font-mono text-[11px] tracking-wider text-black/55 mb-4">
                    STEP / {s.n}
                  </div>
                  <h3 className="font-serif font-normal text-[clamp(1.875rem,3.5vw,2.75rem)] leading-[1.05] tracking-[-0.02em] mb-5">
                    {s.title}
                  </h3>
                  <p className="text-[17px] text-black/55 leading-[1.6] max-w-[44ch]">
                    {s.body}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
