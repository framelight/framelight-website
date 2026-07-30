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

const CONTACT_EMAIL = 'team@framelight.ai';
const LAST_UPDATED = 'July 30, 2026';

export default function PrivacyPolicy() {
  return (
    <LegalPage title="Privacy Policy" lastUpdated={LAST_UPDATED}>
      <LegalSection title="Overview">
        <p>
          This Privacy Policy explains how Framelight (&quot;Framelight,&quot;
          &quot;we,&quot; &quot;us&quot;) collects, uses, and protects
          information when you visit framelight.ai, join our waitlist, join
          our Discord community, or use the Framelight mobile app. By using
          our website or app, you agree to the practices described here.
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
      </LegalSection>

      <LegalSection title="Mobile App and On-Device Processing">
        <p>
          Framelight’s composition guidance and face detection are
          processed on your device. Camera images, photos, and face-detection
          results are not sent to Framelight or Google servers.
        </p>
        <p>
          Framelight uses{' '}
          <a
            href="https://developers.google.com/ml-kit/terms"
            className="text-black/80 underline hover:text-black transition-colors"
          >
            Google ML Kit
          </a>{' '}
          to provide on-device face detection. Google ML Kit collects limited
          technical and usage information for analytics, diagnostics,
          maintenance, and performance improvement. This information may
          include device and operating-system information, app name and
          version, a per-installation identifier, image format and resolution,
          feature initialization and detection events, performance
          measurements such as latency, and error codes.
        </p>
        <p>
          This technical information is not linked to your identity and is not
          used for advertising or tracking. Google does not receive the camera
          images, photos, or face-detection results processed by ML Kit.
        </p>
      </LegalSection>

      <LegalSection title="Camera Access">
        <p>
          The app requests access to the device camera solely for the purpose
          of providing its core functionality. Camera data is used in real
          time and is not recorded, stored, or shared with the developers or
          any third parties.
        </p>
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
          website, waitlist, and mobile app:
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
          <li>
            <strong className="text-black/80">
              <a
                href="https://developers.google.com/ml-kit/terms"
                className="underline hover:text-black transition-colors"
              >
                Google ML Kit
              </a>
            </strong>{' '}
            — performs face detection on your device. Google receives limited
            technical, performance, diagnostic, and utilization metrics used
            for analytics and app functionality. These metrics are not used
            for advertising or tracking and are not linked to your identity.
            Google does not receive camera images, photos, or face-detection
            results.
          </li>
        </ul>
        <p>
          When you choose to save or share a photo, Framelight uses your
          device’s Photos functionality or system share sheet. The
          selected operating system or destination provider handles that
          action under its own privacy policy. Framelight does not retain
          credentials for those services or store an additional server-side
          copy of the photo.
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
          you, and to opt out of future communications. To exercise any of
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
