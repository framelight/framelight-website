import { Aperture } from 'lucide-react';

const CONTACT_EMAIL = 'framelight.ai@gmail.com';

const LINKS = [
  {
    title: 'Product',
    items: [
      { label: 'How it works', href: '#how' },
      { label: 'Use cases', href: '#moments' },
      { label: 'Join waitlist', href: '#waitlist' },
    ],
  },
  {
    title: 'Company',
    items: [
      { label: 'About', href: '#' },
      { label: 'Press', href: '#' },
      { label: 'Contact', href: `mailto:${CONTACT_EMAIL}` },
    ],
  },
  {
    title: 'Legal',
    items: [
      { label: 'Privacy', href: '/privacy' },
      { label: 'Terms', href: '/terms' },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative pt-20 md:pt-28 pb-10 px-5 sm:px-8 bg-white border-t border-black/[0.06]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[1.5fr_2fr] gap-12 mb-16">
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 rounded-full bg-[#2d2d2d] flex items-center justify-center">
                <Aperture
                  className="w-4.5 h-4.5 text-[#f5f1eb]"
                  strokeWidth={1.5}
                />
              </div>
              <span className="font-serif text-2xl tracking-[-0.015em]">
                Framelight
              </span>
            </div>
            <p className="text-[15px] text-black/55 max-w-sm leading-[1.55]">
              Real-time composition guidance, on-device. Helping you capture what
              matters.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {LINKS.map((col) => (
              <div key={col.title}>
                <h3 className="font-sans text-[11px] uppercase tracking-[0.16em] text-black/60 font-medium mb-4">
                  {col.title}
                </h3>
                <ul className="space-y-2.5 text-[14px] text-black/65">
                  {col.items.map((it) => (
                    <li key={it.label}>
                      <a
                        href={it.href}
                        className="hover:text-black transition-colors"
                      >
                        {it.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-8 border-t border-black/[0.06] flex flex-col sm:flex-row items-center justify-between gap-5">
          <p className="text-[12px] text-black/55 order-3 sm:order-1">
            © {new Date().getFullYear()} Framelight. Crafted with care.
          </p>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="text-[12px] text-black/55 hover:text-black transition-colors order-2"
          >
            {CONTACT_EMAIL}
          </a>
          <div className="flex items-center gap-3 order-1 sm:order-3">
            <a
              href="https://x.com/FramelightAI"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X"
              className="opacity-60 hover:opacity-100 transition-opacity"
            >
              <img src="/logos/x.png" alt="X" className="w-5 h-5 rounded" />
            </a>
            <a
              href="https://www.instagram.com/framelightai/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="opacity-60 hover:opacity-100 transition-opacity"
            >
              <img src="/logos/instagram.avif" alt="Instagram" className="w-5 h-5 rounded" />
            </a>
            <a
              href="https://discord.gg/qtbpZ8Sfc"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Discord"
              className="opacity-60 hover:opacity-100 transition-opacity"
            >
              <img src="/logos/discord.png" alt="Discord" className="w-5 h-5 rounded" />
            </a>
            <a
              href="https://www.tiktok.com/@framelightai"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="opacity-60 hover:opacity-100 transition-opacity"
            >
              <img src="/logos/tiktok.png" alt="TikTok" className="w-5 h-5 rounded" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
