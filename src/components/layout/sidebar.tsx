"use client";
/**
 * RelayPad persistent sidebar — premium auto-collapsing rail.
 * Collapsed by default (68px icon rail); expands to 240px while hovered,
 * pinned, or keyboard-focused; collapses smoothly when the pointer leaves.
 * Renders as a drawer on mobile.
 */
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RelayPadLogo } from "@/components/brand/logo";
import { Icon } from "@/components/ui/icons";

export interface NavItem {
  href: string;
  label: string;
  icon: string;
  /** Exact-match active detection (for /). */
  exact?: boolean;
}

export const PRIMARY_NAV: NavItem[] = [
  { href: "/", label: "Home", icon: "home", exact: true },
  { href: "/tokens", label: "Explore", icon: "compass" },
  { href: "/live", label: "Live Launches", icon: "activity" },
  { href: "/trending", label: "Trending", icon: "trending" },
  { href: "/leaderboard", label: "Leaderboard", icon: "trophy" },
  { href: "/watchlist", label: "Watchlist", icon: "star" },
  { href: "/dashboard", label: "My Tokens", icon: "wallet" },
];

export const CREATOR_NAV: NavItem[] = [
  { href: "/create", label: "Create Token", icon: "plus" },
  { href: "/dashboard", label: "My Launches", icon: "rocket" },
  { href: "/vanity", label: "Vanity Mint Generator", icon: "wand" },
];

export const FOOTER_NAV: NavItem[] = [
  { href: "/docs", label: "Documentation", icon: "book" },
  { href: "/status", label: "Network Status", icon: "signal" },
  { href: "/settings", label: "Settings", icon: "gear" },
  { href: "/docs#help", label: "Help", icon: "help" },
];

function isActive(item: NavItem, pathname: string): boolean {
  if (item.exact) return pathname === item.href;
  const base = item.href.split("#")[0];
  return pathname === base || pathname.startsWith(base + "/");
}
function NavSection({
  title,
  items,
  pathname,
  compact,
  onNavigate,
}: {
  title?: string;
  items: NavItem[];
  pathname: string;
  compact: boolean;
  onNavigate?: () => void;
}) {
  return (
    <div className="px-2 py-1">
      {title &&
        (compact ? (
          <p className="sr-only">{title}</p>
        ) : (
          <p className="px-2 pb-1 pt-3 text-2xs font-semibold uppercase tracking-wider text-night-400">
            {title}
          </p>
        ))}
      <ul className="space-y-0.5">
        {items.map((item) => {
          const active = isActive(item, pathname);
          return (
            <li key={item.label}>
              <Link
                href={item.href}
                onClick={onNavigate}
                aria-current={active ? "page" : undefined}
                title={compact ? item.label : undefined}
                className={`flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-[13px] transition-colors ${
                  active
                    ? "bg-night-700/80 text-mint-400"
                    : "text-night-400 hover:bg-night-800 hover:text-white"
                } ${compact ? "justify-center px-0" : ""}`}
              >
                <Icon name={item.icon} size={16} className="shrink-0" />
                <span className={compact ? "sr-only" : "truncate"}>{item.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export function SidebarNav({
  collapsed,
  onNavigate,
}: {
  collapsed: boolean;
  onNavigate?: () => void;
}) {
  const pathname = usePathname();
  return (
    <nav aria-label="Primary" className="flex h-full flex-col">
      <div className="min-h-0 flex-1 overflow-y-auto overflow-x-hidden">
        <NavSection items={PRIMARY_NAV} pathname={pathname} compact={collapsed} onNavigate={onNavigate} />
        <div className="mx-3 my-1 border-t border-night-700/60" />
        {!collapsed ? (
          <div className="px-4 pb-1 pt-3">
            <Link
              href="/create"
              onClick={onNavigate}
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-mint-500 py-2 text-[13px] font-semibold text-night-950 transition hover:bg-mint-400"
            >
              <Icon name="plus" size={15} />
              Create Token
            </Link>
          </div>
        ) : (
          <div className="flex justify-center pb-1 pt-1">
            <Link
              href="/create"
              onClick={onNavigate}
              title="Create Token"
              aria-label="Create Token"
              className="flex h-9 w-9 items-center justify-center rounded-lg bg-mint-500 text-night-950 transition hover:bg-mint-400"
            >
              <Icon name="plus" size={16} />
            </Link>
          </div>
        )}
        <NavSection title="Creator" items={CREATOR_NAV} pathname={pathname} compact={collapsed} onNavigate={onNavigate} />
      </div>
      <div className="mx-3 border-t border-night-700/60" />
      <NavSection items={FOOTER_NAV} pathname={pathname} compact={collapsed} onNavigate={onNavigate} />
    </nav>
  );
}

export function Sidebar({
  expanded,
  pinned,
  onHoverChange,
  onFocusWithinChange,
  onTogglePin,
}: {
  expanded: boolean;
  /** Pin keeps the sidebar expanded even without hover (also the click-to-toggle path for touch devices). */
  pinned: boolean;
  onHoverChange: (hovered: boolean) => void;
  onFocusWithinChange: (focused: boolean) => void;
  onTogglePin: () => void;
}) {
  const compact = !expanded;
  return (
    <aside
      onMouseEnter={() => onHoverChange(true)}
      onMouseLeave={() => onHoverChange(false)}
      onFocus={() => onFocusWithinChange(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) onFocusWithinChange(false);
      }}
      className={`fixed inset-y-0 left-0 z-40 hidden flex-col overflow-hidden border-r border-night-700/70 bg-night-900 transition-[width] duration-200 ease-in-out motion-reduce:transition-none md:flex ${
        expanded ? "w-60" : "w-[68px]"
      }`}
    >
      <div className={`flex items-center gap-2.5 py-4 ${compact ? "justify-center px-0" : "px-4"}`}>
        <Link href="/" aria-label="DotPad home" className="shrink-0">
          <RelayPadLogo size={26} />
        </Link>
        {!compact && (
          <Link href="/" className="truncate text-[15px] font-semibold tracking-tight text-white">
            Dot<span className="text-mint-400">Pad</span>
          </Link>
        )}
      </div>
      <SidebarNav collapsed={compact} />
      <div className={`flex items-center py-2 ${compact ? "justify-center px-0" : "justify-between px-3"}`}>
        {!compact && (
          <span className="truncate text-2xs text-night-500">One Launchpad. Two Routes.</span>
        )}
        <button
          onClick={onTogglePin}
          aria-label={pinned ? "Collapse sidebar" : "Expand and pin sidebar"}
          aria-pressed={pinned}
          title={pinned ? "Collapse sidebar" : "Expand and pin sidebar"}
          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md text-night-400 transition hover:bg-night-800 hover:text-white"
        >
          <Icon name="chevronsLeft" size={15} className={compact ? "rotate-180" : ""} />
        </button>
      </div>
    </aside>
  );
}

/** Mobile navigation drawer (slide-in from the left). */
export function MobileDrawer({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 md:hidden" role="dialog" aria-modal="true" aria-label="Navigation">
      <button aria-label="Close navigation" onClick={onClose} className="absolute inset-0 bg-black/70" />
      <div className="absolute inset-y-0 left-0 flex w-64 flex-col border-r border-night-700 bg-night-900">
        <div className="flex items-center justify-between px-4 py-4">
          <span className="flex items-center gap-2.5">
            <RelayPadLogo size={24} />
            <span className="text-[15px] font-semibold text-white">
              Dot<span className="text-mint-400">Pad</span>
            </span>
          </span>
          <button
            onClick={onClose}
            aria-label="Close"
            className="flex h-8 w-8 items-center justify-center rounded-md text-night-400 hover:bg-night-800 hover:text-white"
          >
            <Icon name="x" size={16} />
          </button>
        </div>
        <SidebarNav collapsed={false} onNavigate={onClose} />
      </div>
    </div>
  );
}
