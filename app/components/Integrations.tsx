import { Cloud, Droplets, Image as ImageIcon, Instagram } from 'lucide-react';
import { Reveal } from './Reveal';

const SERVICES = [
  { name: 'Google Photos', icon: ImageIcon },
  { name: 'iCloud', icon: Cloud },
  { name: 'Dropbox', icon: Droplets },
  { name: 'Instagram', icon: Instagram },
] as const;

export function Integrations() {
  return (
    <section className="relative py-24 md:py-32 px-5 sm:px-8">
      <div className="max-w-5xl mx-auto text-center">
        <Reveal>
          <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-black/55 mb-5 font-medium">
            Integrations
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-serif font-normal text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.02] tracking-[-0.025em] mb-6">
            Works with everything
            <br />
            <em className="italic">you already use.</em>
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="text-[17px] text-black/55 mb-14 max-w-xl mx-auto leading-[1.55]">
            Save originals where you already keep them. No new accounts, no
            lock-in.
          </p>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {SERVICES.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.name} delay={i * 0.06} y={16}>
                <div className="group bg-white rounded-2xl p-7 border border-black/[0.05] hover:border-black/15 hover:shadow-[0_10px_30px_-12px_rgba(0,0,0,0.12)] transition-all duration-300 flex flex-col items-center gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-[#f5f1eb] flex items-center justify-center text-black/70 group-hover:scale-105 transition-transform">
                    <Icon className="w-6 h-6" strokeWidth={1.5} />
                  </div>
                  <p className="font-sans text-[13px] font-medium text-black/80">
                    {s.name}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
