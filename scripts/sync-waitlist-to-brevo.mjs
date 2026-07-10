// One-off / re-runnable backfill: pushes every email currently in the Neon
// `waitlist` table into the Brevo "Framelight Waitlist" list. Safe to run
// as many times as you want — Brevo dedupes on email (updateEnabled: true).
//
// Usage:
//   bun scripts/sync-waitlist-to-brevo.mjs
//   # or: node --env-file=.env.local scripts/sync-waitlist-to-brevo.mjs
//
// Requires DATABASE_URL and BREVO_API_KEY in your environment (same values
// the app already uses / your Brevo dashboard API key).

import { neon } from "@neondatabase/serverless";

const databaseUrl = process.env.DATABASE_URL;
const apiKey = process.env.BREVO_API_KEY;
const listId = Number(process.env.BREVO_WAITLIST_LIST_ID ?? 2);
const CONCURRENCY = 5;

if (!databaseUrl) {
  console.error("DATABASE_URL is not set.");
  process.exit(1);
}
if (!apiKey) {
  console.error("BREVO_API_KEY is not set.");
  process.exit(1);
}

const sql = neon(databaseUrl);

async function addToBrevo(email) {
  const res = await fetch("https://api.brevo.com/v3/contacts", {
    method: "POST",
    headers: {
      "api-key": apiKey,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ email, listIds: [listId], updateEnabled: true }),
  });
  if (res.ok) return { ok: true };
  const body = await res.text().catch(() => "");
  return { ok: false, detail: `${res.status}: ${body}` };
}

const rows = await sql`SELECT email FROM waitlist ORDER BY created_at ASC`;
console.log(
  `Found ${rows.length} waitlist emails in Neon. Syncing to Brevo list ${listId}...`
);

let ok = 0;
let failed = 0;

for (let i = 0; i < rows.length; i += CONCURRENCY) {
  const batch = rows.slice(i, i + CONCURRENCY);
  const results = await Promise.all(batch.map((r) => addToBrevo(r.email)));
  results.forEach((result, idx) => {
    if (result.ok) {
      ok++;
    } else {
      failed++;
      console.error(`  x ${batch[idx].email}: ${result.detail}`);
    }
  });
  process.stdout.write(
    `\rSynced ${Math.min(i + CONCURRENCY, rows.length)}/${rows.length}`
  );
}

console.log(`\nDone. ${ok} synced, ${failed} failed.`);
if (failed > 0) process.exit(1);
