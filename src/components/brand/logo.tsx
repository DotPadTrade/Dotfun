/**
 * RelayPad brand mark — the official Relay symbol (recovered 2048×2127 asset,
 * chroma-keyed in public/relaypad-logo-transparent.png), paired with the
 * RelayPad wordmark.
 *
 * The mark itself is a server-safe <img>: it renders identically everywhere
 * (navbar, sidebar, drawer) without client-side image optimization.
 */
export function RelayPadLogo({ size = 32, className = "" }: { size?: number; className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/relaypad-logo-transparent.png"
      alt="Relay logo"
      width={size}
      height={size}
      className={`shrink-0 ${className}`}
      draggable={false}
    />
  );
}

export function RelayPadWordmark({ size = 32 }: { size?: number }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <RelayPadLogo size={size} />
      <span className="text-lg font-semibold tracking-tight text-white">
        Relay<span className="text-mint-400">Pad</span>
      </span>
    </span>
  );
}
