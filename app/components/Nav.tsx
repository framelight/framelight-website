export function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#f5f1eb]/75 backdrop-blur-xl border-b border-black/[0.06]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 h-14 md:h-16 flex items-center justify-between relative">
        <a
          href="#"
          className="text-lg md:hidden font-serif shrink-0 leading-none tracking-tight"
          aria-label="Framelight home"
        >
          Framelight
        </a>

        <div className="hidden md:flex items-center gap-7 font-sans">
          <a
            href="#problem"
            className="text-[13px] text-black/70 hover:text-black transition-colors"
          >
            Why
          </a>
          <a
            href="#how"
            className="text-[13px] text-black/70 hover:text-black transition-colors"
          >
            How it works
          </a>
          <a
            href="#moments"
            className="text-[13px] text-black/70 hover:text-black transition-colors"
          >
            Moments
          </a>
        </div>

        <a
          href="#"
          className="hidden md:block absolute left-1/2 -translate-x-1/2 font-serif text-xl leading-none tracking-tight pointer-events-auto"
          aria-label="Framelight home"
        >
          Framelight
        </a>

        <a
          href="#waitlist"
          className="px-4 py-2 md:px-5 md:py-2 bg-[#2d2d2d] text-[#f5f1eb] text-[12px] md:text-[13px] font-sans font-medium rounded-full hover:bg-black transition-colors shrink-0 ml-auto md:ml-0 inline-flex items-center gap-1.5"
        >
          Join waitlist
          <span aria-hidden className="opacity-60">→</span>
        </a>
      </div>
    </nav>
  );
}
