import { Badge } from "@/components/ui/primitives";

export type DbRoute = "PUMP_PUMPSWAP" | "LAUNCHLAB_CPMM";
export type DbStatus =
  | "PREPARATION"
  | "SUBMITTED"
  | "CONFIRMED"
  | "CURVE_TRADING"
  | "GRADUATION_DETECTED"
  | "POOL_VERIFIED"
  | "FAILED"
  | "UNRESOLVED";

/** Normalize "pump" | "launchlab" adapter ids to DB route names. */
export function normalizeRoute(route: string): DbRoute {
  return route === "launchlab" ? "LAUNCHLAB_CPMM" : "PUMP_PUMPSWAP";
}

/** Reusable launch-route badge — consistent across the whole product. */
export function RouteBadge({ route }: { route: string | null | undefined }) {
  if (!route) return <Badge tone="neutral">route unknown</Badge>;
  const isPump = route === "PUMP_PUMPSWAP" || route === "pump";
  return (
    <Badge tone={isPump ? "mint" : "ice"}>
      {isPump ? "Pump → PumpSwap" : "LaunchLab → CPMM"}
    </Badge>
  );
}

const STATUS_META: Record<DbStatus, { label: string; tone: "neutral" | "mint" | "ice" | "warn" | "danger" | "success" }> = {
  PREPARATION: { label: "preparing", tone: "neutral" },
  SUBMITTED: { label: "submitted", tone: "ice" },
  CONFIRMED: { label: "confirmed", tone: "mint" },
  CURVE_TRADING: { label: "on curve", tone: "mint" },
  GRADUATION_DETECTED: { label: "graduating", tone: "ice" },
  POOL_VERIFIED: { label: "pool verified", tone: "success" },
  FAILED: { label: "failed", tone: "danger" },
  UNRESOLVED: { label: "unresolved", tone: "warn" },
};

/** Reusable lifecycle status badge. */
export function StatusBadge({ status }: { status: string | null | undefined }) {
  const meta = (status && STATUS_META[status as DbStatus]) || {
    label: (status ?? "unknown").toLowerCase().replace(/_/g, " "),
    tone: "neutral" as const,
  };
  return <Badge tone={meta.tone}>{meta.label}</Badge>;
}

/** Ordered lifecycle phases for progress indicators. */
export const LIFECYCLE_STEPS: { key: DbStatus; label: string }[] = [
  { key: "PREPARATION", label: "Prepare" },
  { key: "CONFIRMED", label: "Confirmed" },
  { key: "CURVE_TRADING", label: "On curve" },
  { key: "GRADUATION_DETECTED", label: "Graduating" },
  { key: "POOL_VERIFIED", label: "Pool verified" },
];

/** Index of the current lifecycle step (-1 for terminal failure states). */
export function lifecycleIndex(status: string): number {
  if (status === "FAILED" || status === "UNRESOLVED") return -1;
  if (status === "SUBMITTED") return 1; // awaiting confirmation ≈ confirmed step pending
  const idx = LIFECYCLE_STEPS.findIndex((s) => s.key === status);
  return idx;
}
