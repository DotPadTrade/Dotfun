/**
 * Next.js instrumentation — runs once when the server process starts, before
 * it accepts requests.
 *
 * RelayPad's production deployment initially used a SQLite `DATABASE_URL`
 * whose relative path could not be opened by the runtime, and a fresh
 * database has no tables until migrations are applied. Both caused the
 * registry APIs (and the RelayPad discovery feed) to fail. This hook
 * resolves the SQLite file deterministically and bootstraps the schema
 * (create-if-missing, records preserved) before traffic flows.
 */
export async function register() {
  if (process.env.NEXT_RUNTIME !== "nodejs") return;
  try {
    const { ensureSqliteSchema } = await import("@/lib/db");
    const result = await ensureSqliteSchema();
    if (result && result.bootstrapped) {
      console.error(`[instrumentation] registry database schema bootstrapped (created: ${result.missing.join(", ")})`);
    }
  } catch (err) {
    console.error("[instrumentation] database bootstrap error:", err);
  }
}
