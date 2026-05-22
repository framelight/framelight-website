import Image from 'next/image';
import { Reveal } from './Reveal';

const FEATURED = [
  {
    image: '/images/card-family.jpg',
    title: 'Family gatherings',
    caption: 'Everyone in frame, perfectly placed.',
    tag: 'Family',
  },
  {
    image: '/images/card-sunset.jpg',
    title: 'Golden hour magic',
    caption: 'Horizons true, colors at their best.',
    tag: 'Landscape',
  },
];

const SMALL = [
  {
    image: '/images/card-celebration.jpg',
    title: 'Celebrations',
    caption: 'Once-in-a-lifetime moments.',
    tag: 'Events',
  },
  {
    image: '/images/card-travel.jpg',
    title: 'Adventures',
    caption: 'Travel memories worth printing.',
    tag: 'Travel',
  },
  {
    image: '/images/card-pets.jpg',
    title: 'Pet portraits',
    caption: 'Candid, balanced, alive.',
    tag: 'Pets',
  },
];

export function UseCases() {
  return (
    <section id="moments" className="relative py-24 md:py-32 px-5 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14 md:mb-20 max-w-2xl mx-auto">
          <Reveal>
            <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-black/55 mb-5 font-medium">
              Use cases
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-serif font-normal text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.02] tracking-[-0.025em] mb-6">
              Every moment,
              <br />
              <em className="italic">perfectly framed.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="text-[17px] text-black/55 leading-[1.55]">
              From family gatherings to once-in-a-lifetime adventures, capture
              memories exactly as you want to remember them.
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6">
          {FEATURED.map((card, i) => (
            <Reveal key={card.title} delay={i * 0.08} y={24}>
              <a
                href="#waitlist"
                className="relative group overflow-hidden rounded-[28px] aspect-[4/3] shadow-[0_20px_40px_-20px_rgba(0,0,0,0.2)] block"
              >
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                <div className="absolute top-5 right-5">
                  <span className="px-3 py-1.5 bg-white/15 backdrop-blur-md border border-white/25 rounded-full font-sans text-[11px] font-medium text-white tracking-wide">
                    {card.tag}
                  </span>
                </div>
                <div className="absolute bottom-7 left-7 right-7">
                  <h3 className="font-serif text-[28px] md:text-[32px] leading-[1.05] tracking-[-0.02em] text-white mb-1.5 drop-shadow-sm">
                    {card.title}
                  </h3>
                  <p className="text-white/85 text-[14px] leading-snug">
                    {card.caption}
                  </p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          {SMALL.map((card, i) => (
            <Reveal key={card.title} delay={i * 0.08} y={24}>
              <a
                href="#waitlist"
                className="relative group overflow-hidden rounded-[24px] aspect-square shadow-[0_12px_30px_-15px_rgba(0,0,0,0.2)] block"
              >
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                <div className="absolute top-5 right-5">
                  <span className="px-2.5 py-1 bg-white/15 backdrop-blur-md border border-white/25 rounded-full font-sans text-[10px] font-medium text-white tracking-wide">
                    {card.tag}
                  </span>
                </div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="font-serif text-[22px] md:text-[24px] leading-tight tracking-[-0.015em] text-white mb-1 drop-shadow-sm">
                    {card.title}
                  </h3>
                  <p className="text-white/80 text-[13px] leading-snug">
                    {card.caption}
                  </p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
