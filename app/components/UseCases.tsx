import Image from 'next/image';
import { Reveal } from './Reveal';

type WheelPhoto = {
  src: string;
  alt: string;
  width: number;
};

type UseBlock = {
  image: string;
  title: string;
  caption: string;
  tag: string;
};

// Real shots taken with Framelight — shown as an endless rolling wheel.
const WHEEL: WheelPhoto[] = [
  {
    src: '/images/wheel/wheel-01.jpg',
    alt: 'Golden Gate Bridge at sunset, shot on Framelight',
    width: 960,
  },
  {
    src: '/images/wheel/wheel-02.jpg',
    alt: 'American flag flying at a lookout at dusk',
    width: 540,
  },
  {
    src: '/images/wheel/wheel-03.jpg',
    alt: 'Cyclists riding under a bridge at sunset',
    width: 960,
  },
  {
    src: '/images/wheel/wheel-04.jpg',
    alt: 'Flag and mural under a deep blue evening sky',
    width: 540,
  },
  {
    src: '/images/wheel/wheel-05.jpg',
    alt: 'Red amaranth flowers against a pink sunset sky',
    width: 404,
  },
  {
    src: '/images/wheel/wheel-06.jpg',
    alt: 'Tree-lined campus lawn on a clear morning',
    width: 540,
  },
  {
    src: '/images/wheel/wheel-07.jpg',
    alt: 'Concrete tower against a gradient blue sky',
    width: 540,
  },
  {
    src: '/images/wheel/wheel-08.jpg',
    alt: 'Sneakers hanging from a wire at golden hour',
    width: 540,
  },
  {
    src: '/images/wheel/wheel-09.jpg',
    alt: 'Harvey Milk Terminal with the moon overhead',
    width: 540,
  },
  {
    src: '/images/wheel/wheel-10.jpg',
    alt: 'Sunlit tree-lined city street',
    width: 540,
  },
];

// Use-case blocks: not Framelight shots, so the whole image is blurred
// and the block carries the use text instead.
const USES: UseBlock[] = [
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

type WheelItem = WheelPhoto | UseBlock;

// Two rows, photos interleaved with use-case blocks.
const ROW_ONE: WheelItem[] = [
  WHEEL[0],
  USES[0],
  WHEEL[1],
  WHEEL[2],
  USES[1],
  WHEEL[3],
  WHEEL[4],
];
const ROW_TWO: WheelItem[] = [
  WHEEL[5],
  USES[2],
  WHEEL[6],
  WHEEL[7],
  USES[3],
  WHEEL[8],
  USES[4],
  WHEEL[9],
];

function WheelRowContent({ items, hidden }: { items: WheelItem[]; hidden: boolean }) {
  return (
    <div className="flex shrink-0" aria-hidden={hidden}>
      {items.map((item) =>
        'src' in item ? (
          <Image
            key={item.src}
            src={item.src}
            alt={hidden ? '' : item.alt}
            width={item.width}
            height={720}
            sizes="(max-width: 768px) 320px, 384px"
            loading="lazy"
            decoding="async"
            draggable={false}
            className="mr-4 md:mr-5 h-60 md:h-72 w-auto shrink-0 select-none rounded-[24px] object-cover shadow-[0_12px_30px_-15px_rgba(0,0,0,0.25)]"
          />
        ) : (
          <a
            key={item.title}
            href="#download"
            tabIndex={hidden ? -1 : undefined}
            className="relative mr-4 md:mr-5 block h-60 md:h-72 aspect-[4/3] shrink-0 overflow-hidden rounded-[24px] shadow-[0_12px_30px_-15px_rgba(0,0,0,0.25)]"
          >
            <Image
              src={item.image}
              alt=""
              fill
              sizes="(max-width: 768px) 320px, 384px"
              className="scale-110 object-cover blur-[20px]"
            />
            <div className="absolute inset-0 bg-white/30" />
            <div className="absolute top-4 right-4">
              <span className="px-3 py-1.5 bg-white/35 backdrop-blur-md border border-white/50 rounded-full font-sans text-[11px] font-medium text-[#2d2d2d] tracking-wide">
                {item.tag}
              </span>
            </div>
            <div className="absolute inset-x-5 bottom-5 md:inset-x-6 md:bottom-6">
              <h3 className="font-serif text-[24px] md:text-[28px] leading-[1.05] tracking-[-0.02em] text-[#2d2d2d] mb-1">
                {item.title}
              </h3>
              <p className="text-[#2d2d2d]/70 text-[13px] md:text-[14px] leading-snug">
                {item.caption}
              </p>
            </div>
          </a>
        )
      )}
    </div>
  );
}

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

        {/* Endless two-row wheel: real Framelight shots + blurred use-case blocks */}
        <div className="relative left-1/2 -ml-[50vw] w-screen">
          <Reveal>
            <div className="relative overflow-hidden">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 sm:w-24 bg-gradient-to-r from-[#f5f1eb] to-transparent"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 sm:w-24 bg-gradient-to-l from-[#f5f1eb] to-transparent"
              />
              <div className="flex w-max animate-[wheel-marquee_55s_linear_infinite]">
                <WheelRowContent items={ROW_ONE} hidden={false} />
                <WheelRowContent items={ROW_ONE} hidden={true} />
              </div>
              <div className="mt-4 md:mt-5 flex w-max animate-[wheel-marquee_75s_linear_infinite]">
                <WheelRowContent items={ROW_TWO} hidden={false} />
                <WheelRowContent items={ROW_TWO} hidden={true} />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
