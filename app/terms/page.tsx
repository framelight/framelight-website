import type { Metadata } from 'next';
import { LegalPage, LegalSection } from '../components/LegalPage';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'The terms that govern your use of the Framelight website, waitlist, Discord community, and mobile app.',
  alternates: {
    canonical: '/terms',
  },
};

const CONTACT_EMAIL = 'framelight.ai@gmail.com';
const LAST_UPDATED = 'July 6, 2026';

export default function TermsOfService() {
  return (
    <LegalPage title="Terms of Service" lastUpdated={LAST_UPDATED}>
      <LegalSection title="Acceptance of Terms">
        <p>
          These Terms of Service (&quot;Terms&quot;) govern your use of
          framelight.ai, our waitlist, our Discord community, and the
          Framelight mobile app (collectively, the &quot;Service&quot;). By
          using the Service, you agree to these Terms. If you don&apos;t
          agree, please don&apos;t use the Service.
        </p>
      </LegalSection>

      <LegalSection title="Description of Service">
        <p>
          Framelight is a camera app that gives real-time, on-device
          composition guidance to help you take better photos. The Service is
          currently in a pre-release waitlist and beta stage — features,
          availability, and timelines may change before general release.
        </p>
      </LegalSection>

      <LegalSection title="Eligibility">
        <p>
          You must be at least 13 years old to use the Service. If you are
          under the age of majority in your jurisdiction, you should only use
          the Service with the involvement of a parent or guardian.
        </p>
      </LegalSection>

      <LegalSection title="Waitlist & Beta Access">
        <ul className="list-disc pl-5 space-y-2">
          <li>Joining the waitlist does not guarantee access or a specific invite date.</li>
          <li>Beta software is provided &quot;as is&quot; and may contain bugs, incomplete features, or unexpected behavior.</li>
          <li>We may change, suspend, or discontinue any part of the beta at any time without notice.</li>
          <li>Feedback you share with us (including in Discord) may be used to improve Framelight without any obligation to compensate you.</li>
        </ul>
      </LegalSection>

      <LegalSection title="Community Conduct">
        <p>
          If you join our Discord server, you agree to follow Discord&apos;s
          own Terms of Service and Community Guidelines, as well as any
          server-specific rules we post. We may remove content or restrict
          access for anyone who abuses, spams, or disrupts the community.
        </p>
      </LegalSection>

      <LegalSection title="Intellectual Property">
        <p>
          Framelight and its logo, branding, and app are owned by us and
          protected by intellectual property law. These Terms don&apos;t
          grant you any rights to our trademarks or branding beyond what&apos;s
          needed to use the Service normally.
        </p>
        <p>
          You retain full ownership of the photos and content you capture
          using the app. We don&apos;t claim any rights to your photos, and —
          as described in our{' '}
          <a
            href="/privacy"
            className="text-black/80 underline hover:text-black transition-colors"
          >
            Privacy Policy
          </a>{' '}
          — composition guidance is processed on-device, so we don&apos;t
          receive a copy of your photos.
        </p>
      </LegalSection>

      <LegalSection title="Third-Party Services">
        <p>
          The Service integrates with third-party providers (such as Google
          Photos, iCloud, Dropbox, Instagram, and Discord) at your request.
          Your use of those providers is governed by their own terms and
          privacy policies, not ours — we&apos;re not responsible for how
          they handle your data or for their availability.
        </p>
      </LegalSection>

      <LegalSection title="Disclaimers">
        <p>
          The Service is provided &quot;as is&quot; and &quot;as
          available,&quot; without warranties of any kind, whether express or
          implied, including warranties of merchantability, fitness for a
          particular purpose, or non-infringement. We don&apos;t guarantee
          that composition suggestions will improve every photo, or that the
          Service will be uninterrupted, secure, or error-free.
        </p>
      </LegalSection>

      <LegalSection title="Limitation of Liability">
        <p>
          To the fullest extent permitted by law, Framelight will not be
          liable for any indirect, incidental, special, or consequential
          damages arising from your use of the Service. Our total liability
          for any claim relating to the Service will not exceed the amount
          you&apos;ve paid us in the past 12 months (which, during the free
          waitlist and beta period, is zero).
        </p>
      </LegalSection>

      <LegalSection title="Termination">
        <p>
          We may suspend or end your access to the waitlist, beta, Discord
          community, or app at any time, for any reason, including if we
          believe you&apos;ve violated these Terms. You can stop using the
          Service at any time by leaving the waitlist, Discord server, or
          deleting the app.
        </p>
      </LegalSection>

      <LegalSection title="Changes to These Terms">
        <p>
          We may update these Terms from time to time. If we make material
          changes, we&apos;ll update the &quot;Last updated&quot; date above.
          Continued use of the Service after changes take effect constitutes
          acceptance of the updated Terms.
        </p>
      </LegalSection>

      <LegalSection title="Governing Law">
        <p>
          These Terms are governed by the laws of the United States, without
          regard to conflict-of-law principles, unless local law in your
          jurisdiction requires otherwise.
        </p>
      </LegalSection>

      <LegalSection title="Contact Us">
        <p>
          Questions about these Terms? Reach us at{' '}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="text-black/80 underline hover:text-black transition-colors"
          >
            {CONTACT_EMAIL}
          </a>
          .
        </p>
      </LegalSection>
    </LegalPage>
  );
}
