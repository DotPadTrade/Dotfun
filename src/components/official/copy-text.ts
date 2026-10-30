/**
 * Copy text to the clipboard with a legacy fallback.
 *
 * 1. Async Clipboard API (secure contexts).
 * 2. Hidden-textarea + document.execCommand("copy") fallback for older or
 *    insecure-context browsers.
 *
 * Returns a coarse result instead of throwing so the UI can render exact
 * feedback: "Copied!" on either success path, a helpful error otherwise.
 */
export type CopyResult = "copied" | "copied-fallback" | "failed";

export async function copyText(text: string): Promise<CopyResult> {
  try {
    if (typeof navigator !== "undefined" && navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
      return "copied";
    }
  } catch {
    // Clipboard API can be unavailable (insecure context) or rejected
    // (permission denied) — fall through to the legacy path.
  }

  try {
    if (typeof document !== "undefined" && document.body) {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      textarea.setAttribute("readonly", "");
      textarea.style.position = "fixed";
      textarea.style.top = "-1000px";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      const ok = document.execCommand("copy");
      document.body.removeChild(textarea);
      return ok ? "copied-fallback" : "failed";
    }
  } catch {
    // Legacy path unavailable — report failure.
  }

  return "failed";
}
