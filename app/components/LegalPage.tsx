import { Nav } from './Nav';
import { Footer } from './Footer';

export function LegalSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-12">
      <h2 className="font-serif font-normal text-2xl md:text-[28px] tracking-[-0.015em] mb-4">
        {title}
      </h2>
      <div className="space-y-4 text-[15px] text-black/65 leading-[1.7]">
        {children}
      </div>
    </section>
  );
}

export function LegalPage({
  title,
  lastUpdated,
  children,
}: {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#f5f1eb] text-[#2d2d2d] overflow-x-hidden">
      <Nav />
      <main className="pt-32 pb-24 px-5 sm:px-8">
        <div className="max-w-3xl mx-auto">
          <a
            href="/"
            className="inline-flex items-center gap-1.5 text-[13px] text-black/60 hover:text-black transition-colors font-sans mb-8"
          >
            <span aria-hidden>←</span>
            Back to home
          </a>

          <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-black/50 mb-5 font-medium">
            Legal
          </p>
          <h1 className="font-serif font-normal text-[clamp(2rem,5vw,3rem)] leading-[1.05] tracking-[-0.025em] mb-4">
            {title}
          </h1>
          <p className="text-[14px] text-black/45 mb-14">
            Last updated: {lastUpdated}
          </p>

          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
}
