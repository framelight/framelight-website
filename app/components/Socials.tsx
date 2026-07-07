import { Reveal } from './Reveal';

const ICON_PATHS: Record<string, string> = {
  Discord:
    'M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.0991.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z',
  TikTok:
    'M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07Z',
  X: 'M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z',
};

const SOCIALS = [
  {
    name: 'Discord',
    cta: 'Test the beta',
    badge: 'Beta access',
    href: 'https://discord.gg/qtbpZ8Sfc',
    bg: 'bg-[#5865F2]',
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
    bg: 'bg-black',
  },
  {
    name: 'X',
    cta: 'Coming soon',
    href: '#',
    bg: 'bg-black',
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
                  <div
                    className={`w-12 h-12 rounded-xl overflow-hidden flex items-center justify-center group-hover:scale-105 transition-transform${'bg' in s ? ` ${s.bg}` : ''}`}
                  >
                    {'logo' in s ? (
                      <img
                        src={s.logo}
                        alt={s.name}
                        className="w-full h-full object-contain scale-125"
                      />
                    ) : (
                      <svg
                        aria-hidden
                        className="w-6 h-6 text-white"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d={ICON_PATHS[s.name]} />
                      </svg>
                    )}
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
