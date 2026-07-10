/**
 * Syncs waitlist signups to Brevo so the "Framelight Waitlist" list (id 2)
 * always mirrors the `waitlist` table in Neon, and sends each new signup a
 * confirmation email. Campaigns sent from that list in Brevo reach everyone
 * automatically.
 *
 * Required env vars:
 *   BREVO_API_KEY          - Brevo API key (Settings > SMTP & API > API Keys)
 *   BREVO_WAITLIST_LIST_ID - optional, defaults to 2 ("Framelight Waitlist")
 *   BREVO_SENDER_EMAIL     - optional, from-address for the confirmation email
 *                            (must be a verified sender/domain in Brevo).
 *                            Defaults to "team@framelight.ai".
 *   BREVO_SENDER_NAME      - optional, from-name. Defaults to "Framelight Team".
 */

const BREVO_CONTACTS_URL = "https://api.brevo.com/v3/contacts";
const BREVO_EMAIL_URL = "https://api.brevo.com/v3/smtp/email";

const SOCIALS = [
  { label: "Instagram", href: "https://www.instagram.com/framelightai/" },
  { label: "TikTok", href: "https://www.tiktok.com/@framelightai" },
  { label: "Discord", href: "https://discord.gg/aEcZ3cRD7" },
  { label: "X", href: "https://x.com/FramelightAI" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/framelightai/" },
];

export async function addToBrevoWaitlist(email: string): Promise<void> {
  const apiKey = process.env.BREVO_API_KEY;
  const listId = Number(process.env.BREVO_WAITLIST_LIST_ID ?? 2);

  if (!apiKey) {
    console.error(
      `[brevo] BREVO_API_KEY is not set — skipped syncing ${email} to Brevo.`
    );
    return;
  }

  try {
    const res = await fetch(BREVO_CONTACTS_URL, {
      method: "POST",
      headers: {
        "api-key": apiKey,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email,
        listIds: [listId],
        // Force-merge into the existing contact instead of erroring if the
        // email is already in Brevo (e.g. re-signup, or already imported).
        updateEnabled: true,
      }),
    });

    if (!res.ok) {
      const body = await res.text().catch(() => "");
      console.error(
        `[brevo] Failed to sync ${email} (status ${res.status}): ${body}`
      );
    }
  } catch (err) {
    // Never let a Brevo/network hiccup surface as a waitlist signup failure —
    // Neon is the source of truth; this is best-effort.
    console.error(`[brevo] Error syncing ${email}:`, err);
  }
}

function confirmationHtml(): string {
  const socialLinks = SOCIALS.map(
    (s) =>
      `<a href="${s.href}" style="display:inline-block;margin:0 6px 8px;padding:9px 16px;background:#2d2d2d;color:#f5f1eb;text-decoration:none;border-radius:999px;font-size:13px;font-weight:600;">${s.label}</a>`
  ).join("");

  return `<!doctype html>
<html>
  <body style="margin:0;padding:0;background:#f5f1eb;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f5f1eb;padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:520px;background:#ffffff;border-radius:20px;overflow:hidden;border:1px solid rgba(0,0,0,0.06);">
            <tr>
              <td style="padding:40px 40px 8px;font-family:Georgia,'Times New Roman',serif;color:#2d2d2d;">
                <div style="font-size:22px;font-weight:bold;letter-spacing:-0.5px;margin-bottom:24px;">Framelight</div>
                <h1 style="font-size:28px;line-height:1.15;font-weight:normal;margin:0 0 16px;">Thanks for joining the waitlist!</h1>
              </td>
            </tr>
            <tr>
              <td style="padding:0 40px;font-family:Helvetica,Arial,sans-serif;color:#444;font-size:16px;line-height:1.6;">
                <p style="margin:0 0 16px;">You&rsquo;re officially on the list for early access to Framelight, real-time composition guidance that helps you capture better moments, right as they happen.</p>
                <p style="margin:0 0 24px;">We&rsquo;ll stay in touch. In the meantime, follow along for tips, frames, and behind-the-scenes. We&rsquo;d love to have you:</p>
              </td>
            </tr>
            <tr>
              <td align="center" style="padding:0 28px 8px;font-family:Helvetica,Arial,sans-serif;">
                ${socialLinks}
              </td>
            </tr>
            <tr>
              <td style="padding:24px 40px 40px;font-family:Georgia,'Times New Roman',serif;color:#2d2d2d;font-size:16px;">
                <p style="margin:24px 0 0;">See you soon,<br /><strong>Framelight Team</strong></p>
              </td>
            </tr>
          </table>
          <p style="max-width:520px;margin:20px auto 0;font-family:Helvetica,Arial,sans-serif;color:#999;font-size:12px;line-height:1.5;text-align:center;">You&rsquo;re receiving this because you signed up for the Framelight waitlist.</p>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

function confirmationText(): string {
  const socials = SOCIALS.map((s) => `${s.label}: ${s.href}`).join("\n");
  return `Thanks for joining the waitlist!

You're officially on the list for early access to Framelight, real-time composition guidance that helps you capture better moments, right as they happen.

We'll stay in touch. In the meantime, follow along for tips, frames, and behind-the-scenes. We'd love to have you:

${socials}

See you soon,
Framelight Team`;
}

export async function sendWaitlistConfirmation(email: string): Promise<void> {
  const apiKey = process.env.BREVO_API_KEY;
  const senderEmail = process.env.BREVO_SENDER_EMAIL ?? "team@framelight.ai";
  const senderName = process.env.BREVO_SENDER_NAME ?? "Framelight Team";

  if (!apiKey) {
    console.error(
      `[brevo] BREVO_API_KEY is not set — skipped confirmation email to ${email}.`
    );
    return;
  }

  try {
    const res = await fetch(BREVO_EMAIL_URL, {
      method: "POST",
      headers: {
        "api-key": apiKey,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        sender: { name: senderName, email: senderEmail },
        to: [{ email }],
        subject: "You're on the Framelight waitlist 🎉",
        htmlContent: confirmationHtml(),
        textContent: confirmationText(),
      }),
    });

    if (!res.ok) {
      const body = await res.text().catch(() => "");
      console.error(
        `[brevo] Failed to send confirmation to ${email} (status ${res.status}): ${body}`
      );
    }
  } catch (err) {
    // Best-effort — a failed confirmation email must never fail the signup.
    console.error(`[brevo] Error sending confirmation to ${email}:`, err);
  }
}
