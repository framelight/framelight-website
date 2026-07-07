'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Reveal } from './Reveal';

type Status = 'idle' | 'loading' | 'success' | 'error' | 'duplicate';

export function Waitlist() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<Status>('idle');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (res.status === 201) {
        setStatus('success');
        setEmail('');
      } else if (res.status === 409) {
        setStatus('duplicate');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <section id="waitlist" className="relative py-24 md:py-32 px-5 sm:px-8">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <div className="relative bg-gradient-to-br from-[#fde2c4] via-[#fbd0d8] to-[#cfd8f5] rounded-[32px] p-8 md:p-16 text-center shadow-[0_30px_80px_-20px_rgba(0,0,0,0.18)] overflow-hidden">
            <div
              aria-hidden
              className="absolute inset-0 opacity-[0.07] pointer-events-none"
              style={{
                backgroundImage:
                  'radial-gradient(circle at 20% 20%, rgba(0,0,0,0.6), transparent 50%)',
              }}
            />

            <div className="relative">
              <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-black/50 mb-5 font-medium">
                Early access
              </p>

              <h2 className="font-serif font-normal text-[clamp(2rem,5vw,3.75rem)] leading-[1.02] tracking-[-0.025em] mb-5">
                Start capturing
                <br />
                <em className="italic">better moments today.</em>
              </h2>

              <p className="text-[16px] md:text-[17px] text-black/60 mb-10 max-w-md mx-auto leading-[1.55]">
                Join the waitlist for early access on iOS and Android. We&apos;ll
                send your invite as soon as a spot opens.
              </p>

              {status !== 'success' && (
                <form
                  onSubmit={handleSubmit}
                  className="mx-auto max-w-md"
                  noValidate
                >
                  <div className="relative flex flex-col sm:flex-row gap-2.5 p-1.5 sm:p-1.5 sm:pl-5 sm:bg-white/70 sm:backdrop-blur-md sm:rounded-full sm:border sm:border-white/60 sm:shadow-[0_10px_30px_-12px_rgba(0,0,0,0.15)]">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      required
                      disabled={status === 'loading'}
                      aria-label="Email address"
                      className="flex-1 px-5 py-3.5 sm:py-2.5 sm:px-0 bg-white sm:bg-transparent rounded-full sm:rounded-none font-sans text-[15px] placeholder:text-black/30 focus:outline-none disabled:opacity-50"
                    />
                    <motion.button
                      type="submit"
                      disabled={status === 'loading'}
                      whileHover={{ y: -1 }}
                      whileTap={{ y: 0 }}
                      className="px-7 py-3.5 sm:py-2.5 bg-[#2d2d2d] text-[#f5f1eb] rounded-full hover:bg-black font-sans text-[14px] font-medium whitespace-nowrap disabled:opacity-60 disabled:cursor-not-allowed transition-colors inline-flex items-center justify-center gap-2"
                    >
                      {status === 'loading' ? (
                        <>
                          <span className="w-3.5 h-3.5 border-2 border-current border-t-transparent rounded-full animate-spin" />
                          Joining
                        </>
                      ) : (
                        <>
                          Join waitlist
                          <span aria-hidden>→</span>
                        </>
                      )}
                    </motion.button>
                  </div>

                  <div className="min-h-[1.5rem] mt-4 font-sans">
                    {status === 'duplicate' && (
                      <p className="text-amber-700 text-[13px]">
                        You&apos;re already on the list — we&apos;ll be in touch.
                      </p>
                    )}
                    {status === 'error' && (
                      <p className="text-red-700 text-[13px]">
                        Something went wrong. Please try again.
                      </p>
                    )}
                  </div>
                </form>
              )}

              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mx-auto max-w-md flex flex-col items-center gap-3 py-4"
                >
                  <div className="w-12 h-12 rounded-full bg-emerald-500 flex items-center justify-center shadow-lg">
                    <Check className="w-6 h-6 text-white" strokeWidth={3} />
                  </div>
                  <p className="font-serif text-2xl tracking-[-0.015em]">
                    You&apos;re in.
                  </p>
                  <p className="text-black/60 text-[14px]">
                    We&apos;ll email you the moment your invite is ready.
                  </p>
                </motion.div>
              )}

              <div className="mt-7 flex items-center justify-center gap-5 font-sans text-[12px] text-black/45">
                <div className="flex items-center gap-1.5">
                  <span
                    aria-hidden
                    className="w-1.5 h-1.5 rounded-full bg-black/30"
                  />
                  Free for early adopters
                </div>
                <div className="w-px h-3 bg-black/15" />
                <div className="flex items-center gap-1.5">
                  <span
                    aria-hidden
                    className="w-1.5 h-1.5 rounded-full bg-black/30"
                  />
                  No credit card
                </div>
              </div>

              <div className="mt-8 font-sans">
                <a
                  href="https://discord.gg/qtbpZ8Sfc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[13px] text-black/60 hover:text-black transition-colors"
                >
                  <svg
                    aria-hidden
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.0991.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
                  </svg>
                  Skip the wait — test the beta on Discord
                  <span aria-hidden>→</span>
                </a>
              </div>

              <div className="mt-10 flex items-center justify-center gap-3 opacity-80 font-sans">
                <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-black/85 text-white text-[11px] font-medium">
                  <svg
                    aria-hidden
                    className="w-3.5 h-3.5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.08zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                  </svg>
                  App Store
                </div>
                <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-black/85 text-white text-[11px] font-medium">
                  <svg
                    aria-hidden
                    className="w-3.5 h-3.5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M3.6 20.5V3.5c0-.27.22-.5.5-.5.09 0 .17.02.24.06l13.2 7.5c.34.19.34.69 0 .88l-13.2 7.5a.5.5 0 0 1-.74-.44z" />
                  </svg>
                  Google Play
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
