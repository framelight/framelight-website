import { Reveal } from './Reveal';

const SOCIALS = [
  {
    name: 'Discord',
    cta: 'Test the beta',
    badge: 'Beta access',
    href: 'https://discord.gg/qtbpZ8Sfc',
    logo: '/logos/discord.png',
  },
  {
    name: 'Instagram',
    cta: 'Follow us',
    href: 'https://www.instagram.com/framelightai/',
    logo: '/logos/instagram.avif',
  },
  {
    name: 'TikTok',
    cta: 'Follow us',
    href: 'https://www.tiktok.com/@framelightai',
    logo: '/logos/tiktok.png',
  },
  {
    name: 'X',
    cta: 'Coming soon',
    href: '#',
    logo: '/logos/x.png',
  },
] as const;

export function Socials() {
  return (
    <section className="relative py-24 md:py-32 px-5 sm:px-8">
      <div className="max-w-5xl mx-auto text-center">
        <Reveal>
          <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-black/55 mb-5 font-medium">
            Community
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-serif font-normal text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.02] tracking-[-0.025em] mb-6">
            Join the conversation
            <br />
            <em className="italic">and follow along.</em>
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="text-[17px] text-black/55 mb-14 max-w-xl mx-auto leading-[1.55]">
            Test the beta, share feedback, and see what we&apos;re building next.
          </p>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {SOCIALS.map((s, i) => {
            const isExternal = s.href.startsWith('http');
            return (
              <Reveal key={s.name} delay={i * 0.06} y={16}>
                <a
                  href={s.href}
                  {...(isExternal
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                  className={`group relative bg-white rounded-2xl p-7 transition-all duration-300 flex flex-col items-center gap-3.5${
                    'badge' in s
                      ? ' border-2 border-[#5865F2]/40 hover:border-[#5865F2]/70 hover:shadow-[0_10px_30px_-12px_rgba(88,101,242,0.4)]'
                      : ' border border-black/[0.05] hover:border-black/15 hover:shadow-[0_10px_30px_-12px_rgba(0,0,0,0.12)]'
                  }`}
                >
                  {'badge' in s && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-full bg-[#5865F2] text-white text-[10px] font-medium tracking-wide whitespace-nowrap shadow-sm">
                      {s.badge}
                    </span>
                  )}
                  <div className="w-12 h-12 rounded-xl overflow-hidden flex items-center justify-center group-hover:scale-105 transition-transform">
                    <img
                      src={s.logo}
                      alt={s.name}
                      className={`w-full h-full object-contain${s.name === 'Instagram' ? ' scale-125' : ''}`}
                    />
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <p className="font-sans text-[13px] font-medium text-black/80">
                      {s.name}
                    </p>
                    <p className="font-sans text-[11px] text-black/45 group-hover:text-black/70 inline-flex items-center gap-1 transition-colors">
                      {s.cta}
                      <span
                        aria-hidden
                        className="group-hover:translate-x-0.5 transition-transform"
                      >
                        →
                      </span>
                    </p>
                  </div>
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
