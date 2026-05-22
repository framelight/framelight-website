import { Reveal } from './Reveal';

const TECHNIQUES = [
  {
    title: 'Rule of thirds',
    desc: 'Position subjects at power points for natural balance.',
    glyph: 'grid',
  },
  {
    title: 'Leading lines',
    desc: "Guide the viewer's eye through your composition.",
    glyph: 'lines',
  },
  {
    title: 'Golden ratio',
    desc: "Nature's perfect composition formula.",
    glyph: 'spiral',
  },
  {
    title: 'Edge balance',
    desc: 'Ideal spacing from frame borders, automatically.',
    glyph: 'edge',
  },
] as const;

function Glyph({ name }: { name: (typeof TECHNIQUES)[number]['glyph'] }) {
  switch (name) {
    case 'grid':
      return (
        <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth="1">
          <rect x="2" y="2" width="28" height="28" rx="2" className="text-black/15" />
          <line x1="12" y1="2" x2="12" y2="30" />
          <line x1="22" y1="2" x2="22" y2="30" />
          <line x1="2" y1="12" x2="30" y2="12" />
          <line x1="2" y1="22" x2="30" y2="22" />
          <circle cx="22" cy="12" r="2.5" className="text-black" fill="currentColor" />
        </svg>
      );
    case 'lines':
      return (
        <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth="1.25">
          <rect x="2" y="2" width="28" height="28" rx="2" className="text-black/15" />
          <path d="M2 28 L 16 8 L 30 28" />
          <circle cx="16" cy="8" r="2" fill="currentColor" />
        </svg>
      );
    case 'spiral':
      return (
        <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth="1.25">
          <rect x="2" y="2" width="28" height="28" rx="2" className="text-black/15" />
          <path d="M2 18 A 12 12 0 0 1 14 6 A 7 7 0 0 1 21 13 A 4 4 0 0 1 17 17 A 2.5 2.5 0 0 1 14.5 14.5" />
        </svg>
      );
    case 'edge':
      return (
        <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth="1.25">
          <rect x="2" y="2" width="28" height="28" rx="2" className="text-black/15" />
          <rect x="7" y="7" width="18" height="18" rx="1" className="text-black/35" strokeDasharray="2 2" />
          <circle cx="16" cy="16" r="3" fill="currentColor" />
        </svg>
      );
  }
}

export function Techniques() {
  return (
    <section className="relative py-24 md:py-32 px-5 sm:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14 md:mb-20 max-w-2xl mx-auto">
          <Reveal>
            <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-black/55 mb-5 font-medium">
              Photography principles
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-serif font-normal text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.02] tracking-[-0.025em]">
              Professional techniques,
              <br />
              <em className="italic">learned effortlessly.</em>
            </h2>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 gap-3 md:gap-4">
          {TECHNIQUES.map((t, i) => (
            <Reveal key={t.title} delay={i * 0.06} y={20}>
              <div className="group relative bg-white rounded-2xl p-6 md:p-7 border border-black/[0.05] hover:border-black/15 hover:shadow-[0_10px_30px_-12px_rgba(0,0,0,0.15)] transition-all duration-300">
                <div className="flex items-start gap-5">
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-[#f5f1eb] flex items-center justify-center text-black/70">
                    <Glyph name={t.glyph} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-[22px] leading-tight tracking-[-0.015em] mb-1.5">
                      {t.title}
                    </h3>
                    <p className="text-[14px] text-black/55 leading-relaxed">
                      {t.desc}
                    </p>
                  </div>
                  <div className="self-center text-black/20 group-hover:text-black/50 group-hover:translate-x-0.5 transition-all">
                    →
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
