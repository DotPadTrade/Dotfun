/**
 * Server-side HTTP helper for provider APIs: bounded timeout, capped retries
 * with exponential backoff, and 429 rate-limit handling. Never retries a
 * non-retryable status. No credentials are logged or echoed.
 */
export class ProviderError extends Error {
  code: string;
  status?: number;
  constructor(code: string, message: string, status?: number) {
    super(message);
    this.code = code;
    this.status = status;
  }
}

export async function fetchJson<T>(
  url: string,
  opts: { timeoutMs?: number; retries?: number } = {},
): Promise<T> {
  const timeoutMs = opts.timeoutMs ?? 8000;
  const retries = opts.retries ?? 2;
  let lastError: unknown = null;
  for (let attempt = 0; attempt <= retries; attempt++) {
    if (attempt > 0) {
      // Exponential backoff (400ms, 800ms) + jitter, bounded so a request never
      // stalls the API route beyond ~2s of waiting.
      const jitter = Math.floor(Math.random() * 150);
      await new Promise((r) => setTimeout(r, 200 * 2 ** attempt + jitter));
    }
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), timeoutMs);
    try {
      const res = await fetch(url, {
        signal: controller.signal,
        headers: { accept: "application/json" },
        cache: "no-store",
      });
      if (res.status === 429) {
        // Honor Retry-After when the provider supplies it (seconds or HTTP-date),
        // capped at 5s; otherwise use the exponential backoff below.
        const ra = res.headers.get("retry-after");
        let raMs = 0;
        if (ra) {
          const raSeconds = Number(ra);
          raMs = Number.isFinite(raSeconds) && raSeconds > 0
            ? raSeconds * 1000
            : Date.parse(ra) - Date.now();
        }
        const waitMs = Math.min(5000, Math.max(0, raMs || 0));
        if (waitMs > 0) await new Promise((r) => setTimeout(r, waitMs));
        lastError = new ProviderError("RATE_LIMITED", `429 from provider`, 429);
        continue; // back off and retry
      }
      if (res.status >= 500) {
        lastError = new ProviderError("PROVIDER_DOWN", `${res.status} from provider`, res.status);
        continue;
      }
      if (!res.ok) {
        // 4xx (other than 429) is not retryable — fail fast with the status.
        throw new ProviderError("PROVIDER_REJECTED", `${res.status} from provider`, res.status);
      }
      return (await res.json()) as T;
    } catch (err) {
      if (err instanceof ProviderError && err.code === "PROVIDER_REJECTED") throw err;
      lastError = err;
    } finally {
      clearTimeout(timer);
    }
  }
  throw new ProviderError(
    lastError instanceof ProviderError ? lastError.code : "PROVIDER_UNREACHABLE",
    lastError instanceof Error ? lastError.message : String(lastError),
  );
}
