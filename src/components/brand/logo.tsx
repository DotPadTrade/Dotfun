/**
 * DotPad brand mark — the official white DotPad symbol on the dark-green tile
 * (supplied 2048×2142 asset, served as public/dotpad-logo.jpg), paired with
 * the DotPad wordmark.
 *
 * The mark itself is a server-safe <img>: it renders identically everywhere
 * (navbar, sidebar, drawer) without client-side image optimization.
 * The rendered width is derived from the asset's true aspect ratio
 * (2048/2142 ≈ 0.956) so the mark is never stretched or cropped.
 */
const DOTPAD_LOGO_ASPECT = 2048 / 2142;

export function RelayPadLogo({ size = 32, className = "" }: { size?: number; className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/dotpad-logo.jpg"
      alt="DotPad logo"
      width={Math.max(1, Math.round(size * DOTPAD_LOGO_ASPECT))}
      height={size}
      className={`shrink-0 rounded-md ${className}`}
      draggable={false}
    />
  );
}

export function RelayPadWordmark({ size = 32 }: { size?: number }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <RelayPadLogo size={size} />
      <span className="text-lg font-semibold tracking-tight text-white">
        Dot<span className="text-mint-400">Pad</span>
      </span>
    </span>
  );
}
