import type { Metadata } from 'next';
import { LegalPage, LegalSection } from '../components/LegalPage';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'How Framelight collects, uses, and protects your information across our website, waitlist, and mobile app.',
  alternates: {
    canonical: '/privacy',
  },
};

const CONTACT_EMAIL = 'legal@framelight.ai';
const LAST_UPDATED = 'July 6, 2026';

export default function PrivacyPolicy() {
  return (
    <LegalPage title="Privacy Policy" lastUpdated={LAST_UPDATED}>
      <LegalSection title="Overview">
        <p>
          This Privacy Policy explains how the Framelight Team (&quot;Framelight,&quot;
          &quot;we,&quot; &quot;us&quot;) collects, uses, and protects
          information when you visit framelight.ai, join our waitlist, join
          our Discord community, or use the Framelight mobile app once it is
          released. By using our website or app, you agree to the practices
          described here.
        </p>
      </LegalSection>

      <LegalSection title="Information We Collect">
        <p>
          <strong className="text-black/80">Waitlist signups.</strong> When
          you join our waitlist, we collect the email address you provide so
          we can send you an invite and product updates.
        </p>
        <p>
          <strong className="text-black/80">Website usage data.</strong> Our
          hosting provider automatically logs standard technical information
          (such as IP address, browser type, and request timestamps) for
          security and reliability purposes. We do not currently use cookies,
          analytics scripts, or advertising trackers on this website.
        </p>
        <p>
          <strong className="text-black/80">Community.</strong> If you join
          our Discord server, your interactions there are governed by
          Discord&apos;s own privacy policy and terms, not this one.
        </p>
        <p>
          <strong className="text-black/80">Mobile app.</strong>{' '}
          Framelight&apos;s composition guidance is processed on-device — your
          camera feed and photos are analyzed locally on your phone and are
          not uploaded to Framelight&apos;s servers. If you choose to save a
          photo to a connected account (such as Google Photos, iCloud,
          Dropbox, or Instagram), that photo is sent directly from your device
          to the provider you selected, under your own account and their
          privacy policy — Framelight does not store a copy.
        </p>
        <p>
          <strong className="text-black/80">Mobile app analytics.</strong>{' '}

        </p>
        
      </LegalSection>

      <LegalSection title="Legal Bases for Processing">
        <p>
          For users in jurisdictions that require a legal basis for
          processing, we process personal information on the following
          bases:
        </p>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-black/10 text-left">
                <th className="py-2 pr-4 font-semibold text-black/80">
                  Data
                </th>
                <th className="py-2 pr-4 font-semibold text-black/80">
                  Legal basis
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-black/5 align-top">
                <td className="py-2 pr-4">Waitlist emails</td>
                <td className="py-2 pr-4">Consent, when you explicitly opt in</td>
              </tr>
              <tr className="border-b border-black/5 align-top">
                <td className="py-2 pr-4">Server logs and security data</td>
                <td className="py-2 pr-4">
                  Legitimate interest in maintaining service uptime and
                  security
                </td>
              </tr>
              <tr className="align-top">
                <td className="py-2 pr-4">Support requests</td>
                <td className="py-2 pr-4">Legitimate interest in responding to support requests</td>
              </tr>
              <tr className="align-top">
                <td className="py-2 pr-4">App diagnostics and crash logs</td>
                <td className="py-2 pr-4">Legitimate interest in maintaining app stability, fixing bugs, and providing a reliable user experience</td>
              </tr>
            </tbody>
          </table>
        </div>
      </LegalSection>

      <LegalSection title="How We Use Your Information">
        <ul className="list-disc pl-5 space-y-2">
          <li>To send waitlist confirmations, beta invites, and launch updates</li>
          <li>To respond to support requests or questions you send us</li>
          <li>To understand aggregate interest in the product (e.g. waitlist size)</li>
          <li>To maintain the security and reliability of our website</li>
        </ul>
        <p>
          We do not sell your personal information, and we do not share your
          email address with third parties for their own marketing purposes.
        </p>
      </LegalSection>

      <LegalSection title="Third-Party Services">
        <p>
          We rely on a small number of service providers to operate our
          website and waitlist:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong className="text-black/80">Vercel</strong> — hosts our
            website
          </li>
          <li>
            <strong className="text-black/80">Neon</strong> — hosts the
            database that stores waitlist emails
          </li>
          <li>
            <strong className="text-black/80">Discord</strong> — hosts our
            community server
          </li>
        </ul>
        <p>
          Any integrations you connect within the app (Google Photos, iCloud,
          Dropbox, Instagram) are authorized directly between you and that
          provider — Framelight only initiates the save action you request
          and does not retain your credentials for those services.
        </p>
      </LegalSection>

      <LegalSection title="Data Retention">
        <p>
          We retain your waitlist email for as long as needed to send you
          your invite and related updates, or until you ask us to delete it.
          You can request deletion at any time — see &quot;Your Rights&quot;
          below.
        </p>
      </LegalSection>

      <LegalSection title="Your Rights">
        <p>
          Depending on where you live, you may have the right to access,
          correct, export, or delete the personal information we hold about
          you, and to opt out of future communications. Where we process your
          information based on your consent (such as for our waitlist), you have
          the right to withdraw that consent at any time. To exercise any of
          these rights, email us at{' '}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="text-black/80 underline hover:text-black transition-colors"
          >
            {CONTACT_EMAIL}
          </a>{' '}
          and we&apos;ll respond as soon as we can.
        </p>
      </LegalSection>

      <LegalSection title="Children's Privacy">
        <p>
          Framelight is not directed at children under 13, and we do not
          knowingly collect personal information from children. If you
          believe a child has provided us with personal information, please
          contact us and we will delete it.
        </p>
      </LegalSection>

      <LegalSection title="Data Security">
        <p>
          We use reasonable technical and organizational measures to protect
          the information we collect. No method of transmission or storage is
          100% secure, so we can&apos;t guarantee absolute security.
        </p>
      </LegalSection>

      <LegalSection title="International Users">
        <p>
          We are based in the United States, and any information you provide
          may be processed and stored in the United States or other
          countries where our service providers operate.
        </p>
      </LegalSection>

      <LegalSection title="Changes to This Policy">
        <p>
          We may update this Privacy Policy from time to time. If we make
          material changes, we&apos;ll update the &quot;Last updated&quot;
          date above. Continued use of our website or app after changes take
          effect constitutes acceptance of the updated policy.
        </p>
      </LegalSection>

      <LegalSection title="Contact Us">
        <p>
          Questions about this policy or how we handle your information?
          Reach us at{' '}
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
