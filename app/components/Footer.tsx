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
      { label: 'Privacy', href: '#' },
      { label: 'Terms', href: '#' },
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
          <div className="flex items-center gap-4 order-1 sm:order-3">
            <a
              href="#"
              aria-label="Twitter"
              className="text-black/40 hover:text-black transition-colors"
            >
              <svg
                className="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="text-black/40 hover:text-black transition-colors"
            >
              <svg
                className="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
