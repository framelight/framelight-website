'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Nav() {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const anchor = (hash: string) => (isHome ? hash : `/${hash}`);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#f5f1eb]/75 backdrop-blur-xl border-b border-black/[0.06]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 h-16 md:h-20 flex items-center justify-between relative">
        <div className="hidden md:flex items-center gap-7 font-sans">
          <a href={anchor('#problem')} className="text-[13px] text-black/70 hover:text-black transition-colors">Why</a>
          <a href={anchor('#how')} className="text-[13px] text-black/70 hover:text-black transition-colors">How it works</a>
          <a href={anchor('#moments')} className="text-[13px] text-black/70 hover:text-black transition-colors">Moments</a>
        </div>

        <Link
          href="/"
          className="absolute left-1/2 -translate-x-1/2 flex h-10 w-32 sm:h-11 sm:w-40 md:h-12 md:w-48 items-center justify-center overflow-hidden"
          aria-label="Framelight home"
        >
          <Image
            src="/black logoframelight .png"
            alt="Framelight"
            width={2000}
            height={2000}
            priority
            className="h-40 sm:h-48 md:h-56 w-auto max-w-none object-contain"
          />
        </Link>

        <div className="flex items-center gap-3 shrink-0 ml-auto md:ml-0">
          {!isHome && (
            <Link
              href="/"
              className="text-[12px] md:text-[13px] text-black/70 hover:text-black transition-colors font-sans inline-flex items-center gap-1.5 shrink-0"
            >
              <span aria-hidden>←</span>
              Back
            </Link>
          )}

          <a
            href={anchor('#waitlist')}
            className="px-4 py-2 md:px-5 md:py-2 bg-[#2d2d2d] text-[#f5f1eb] text-[12px] md:text-[13px] font-sans font-medium rounded-full hover:bg-black transition-colors shrink-0 inline-flex items-center gap-1.5"
          >
            Join<span className="hidden sm:inline"> waitlist</span>
            <span aria-hidden className="opacity-60">→</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
