import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { LegalPage, LegalSection } from '../components/LegalPage';

export const metadata: Metadata = {
  title: 'Support',
  description:
    'Get help with Framelight. Contact our team, find answers to common questions, and reach us about the Framelight camera app for iOS and Android.',
  alternates: {
    canonical: '/support',
  },
};

const SUPPORT_EMAIL = 'framelight.ai@gmail.com';
const DISCORD_URL = 'https://discord.gg/cN3VDRbzXz';

export default function Support() {
  return (
    <LegalPage title="Support" eyebrow="Help center">
      {/* App identification — makes clear which app this page supports */}
      <div className="mb-12 flex items-center gap-4 rounded-2xl border border-black/[0.06] bg-white p-5 md:p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_20px_40px_-24px_rgba(0,0,0,0.1)]">
        <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl border border-black/[0.06] bg-white">
          <Image
            src="/framelight-icon.png"
            alt="Framelight app icon"
            fill
            sizes="56px"
            className="object-contain"
          />
        </div>
        <div>
          <p className="font-serif text-xl tracking-[-0.015em]">Framelight</p>
          <p className="text-[14px] text-black/55 leading-[1.5]">
            Real-time composition guidance for iOS &amp; Android.
          </p>
        </div>
      </div>

      <LegalSection title="Contact us">
        <p>
          Need help with Framelight, have a question, or found a bug? Email our
          team and we&apos;ll get back to you, usually within 1&ndash;2 business
          days.
        </p>
        <p>
          <a
            href={`mailto:${SUPPORT_EMAIL}`}
            className="inline-flex items-center gap-2 rounded-full bg-[#2d2d2d] px-6 py-3 font-sans text-[14px] font-medium text-[#f5f1eb] transition-colors hover:bg-black"
          >
            Email support
            <span aria-hidden className="opacity-60">
              →
            </span>
          </a>
        </p>
        <p>
          Or reach us directly at{' '}
          <a
            href={`mailto:${SUPPORT_EMAIL}`}
            className="text-black/80 underline hover:text-black transition-colors"
          >
            {SUPPORT_EMAIL}
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection title="Community">
        <p>
          You can also reach the team and other users in our Discord community,
          where we share tips, answer questions, and post beta updates.
        </p>
        <p>
          <a
            href={DISCORD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-black/80 underline hover:text-black transition-colors"
          >
            Join the Framelight Discord
          </a>
        </p>
      </LegalSection>

      <LegalSection title="Frequently asked questions">
        <p>
          <strong className="text-black/80">What is Framelight?</strong>
          <br />
          Framelight is a camera app that gives you real-time composition
          guidance. When you open the camera, it overlays subtle guides and
          shows simple arrows so you can frame a well-composed shot as the moment
          happens.
        </p>
        <p>
          <strong className="text-black/80">
            Does Framelight record or upload my photos?
          </strong>
          <br />
          No. Camera data is used in real time on your device to provide
          guidance and is not recorded, stored, or sent to us. See our{' '}
          <Link
            href="/privacy"
            className="text-black/80 underline hover:text-black transition-colors"
          >
            Privacy Policy
          </Link>{' '}
          for details.
        </p>
        <p>
          <strong className="text-black/80">
            Why does the app need camera access?
          </strong>
          <br />
          Camera access is required for the app&apos;s core function, analyzing
          the live frame to suggest better composition. You can manage this
          permission anytime in your device Settings.
        </p>
        <p>
          <strong className="text-black/80">
            How do I request a feature or report a problem?
          </strong>
          <br />
          Email us at{' '}
          <a
            href={`mailto:${SUPPORT_EMAIL}`}
            className="text-black/80 underline hover:text-black transition-colors"
          >
            {SUPPORT_EMAIL}
          </a>
          . We read every message and appreciate the feedback.
        </p>
        <p>
          <strong className="text-black/80">
            How do I delete my waitlist data?
          </strong>
          <br />
          Email us and we&apos;ll remove your information promptly. Your rights
          are described in our{' '}
          <Link
            href="/privacy"
            className="text-black/80 underline hover:text-black transition-colors"
          >
            Privacy Policy
          </Link>
          .
        </p>
      </LegalSection>

      <LegalSection title="Legal">
        <p>
          Read our{' '}
          <Link
            href="/privacy"
            className="text-black/80 underline hover:text-black transition-colors"
          >
            Privacy Policy
          </Link>{' '}
          and{' '}
          <Link
            href="/terms"
            className="text-black/80 underline hover:text-black transition-colors"
          >
            Terms of Service
          </Link>
          .
        </p>
      </LegalSection>
    </LegalPage>
  );
}
