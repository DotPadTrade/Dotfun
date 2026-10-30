/**
 * Social links for a token (Website / X / Telegram), rendered from the
 * token's off-chain metadata. Links are pre-validated absolute https URLs
 * (see parseTokenSocials) — unavailable links are simply not rendered, never
 * fabricated. External links open in a new tab with safe referrer policy.
 */
import type { TokenSocials } from "@/lib/metadata";

export function SocialLinks({ socials, className = "" }: { socials: TokenSocials | null; className?: string }) {
  const links = [
    socials?.website ? { label: "Website", href: socials.website } : null,
    socials?.twitter ? { label: "X (Twitter)", href: socials.twitter } : null,
    socials?.telegram ? { label: "Telegram", href: socials.telegram } : null,
  ].filter((l): l is { label: string; href: string } => l !== null);
  if (links.length === 0) return null;
  return (
    <div className={`flex flex-wrap items-center gap-1.5 ${className}`}>
      {links.map((l) => (
        <a
          key={l.label}
          href={l.href}
          target="_blank"
          rel="noopener noreferrer nofollow"
          title={l.href}
          className="inline-flex items-center gap-1 rounded-lg border border-night-700 bg-night-850 px-2.5 py-1 text-2xs font-medium text-ice-300 transition-colors duration-200 hover:border-mint-600 hover:text-mint-300"
        >
          {l.label}
          <span aria-hidden>↗</span>
        </a>
      ))}
    </div>
  );
}
