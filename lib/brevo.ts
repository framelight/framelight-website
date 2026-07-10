/**
 * Syncs waitlist signups to Brevo so the "Framelight Waitlist" list (id 2)
 * always mirrors the `waitlist` table in Neon. No more CSV export/import —
 * campaigns sent from that list in Brevo reach everyone automatically.
 *
 * Required env vars:
 *   BREVO_API_KEY          - Brevo API key (Settings > SMTP & API > API Keys)
 *   BREVO_WAITLIST_LIST_ID - optional, defaults to 2 ("Framelight Waitlist")
 */

const BREVO_CONTACTS_URL = "https://api.brevo.com/v3/contacts";

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
