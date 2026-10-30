import { NextResponse } from "next/server";
import { LaunchStatus } from "@prisma/client";
import { getDb, isDatabaseBootError } from "@/lib/db";

/**
 * GET /api/leaderboard — creator rankings computed from the launch registry.
 * Metrics (all clearly defined from real records):
 *  - launches: total recorded launches per creator
 *  - active:   sorted by most recent launch activity (updatedAt)
 *  - graduated: launches that reached graduation detected or a verified pool
 * No earnings, volume, or profitability data exists — none is invented.
 */
const GRADUATED: LaunchStatus[] = [LaunchStatus.GRADUATION_DETECTED, LaunchStatus.POOL_VERIFIED];

interface CreatorRow {
  creatorWallet: string;
  launches: number;
  graduated: number;
  lastActive: Date | null;
}

export async function GET(req: Request) {
  const db = getDb();
  if (!db) {
    return NextResponse.json({ error: "database_not_configured" }, { status: 503 });
  }
  const url = new URL(req.url);
  const metric = url.searchParams.get("metric") ?? "launches";
  const limit = Math.min(Number(url.searchParams.get("limit") ?? 20) || 20, 50);

  try {
    const all = (await db.launch.groupBy({
      by: ["creatorWallet"],
      _count: { _all: true },
      _max: { createdAt: true, updatedAt: true },
    })) as unknown as {
      creatorWallet: string;
      _count: { _all: number };
      _max: { createdAt: Date | null; updatedAt: Date | null };
    }[];
    const graduated = (await db.launch.groupBy({
      by: ["creatorWallet"],
      where: { status: { in: GRADUATED } },
      _count: { _all: true },
    })) as unknown as { creatorWallet: string; _count: { _all: number } }[];
    const gradMap = new Map(graduated.map((g) => [g.creatorWallet, g._count._all]));

    let rows: CreatorRow[] = all.map((g) => ({
      creatorWallet: g.creatorWallet,
      launches: g._count._all,
      graduated: gradMap.get(g.creatorWallet) ?? 0,
      lastActive: (metric === "active" ? g._max.updatedAt ?? g._max.createdAt : g._max.createdAt) ?? null,
    }));

    if (metric === "graduated") {
      rows = rows
        .filter((r) => r.graduated > 0)
        .sort((a, b) => b.graduated - a.graduated || b.launches - a.launches);
    } else if (metric === "active") {
      rows.sort((a, b) => (b.lastActive?.getTime() ?? 0) - (a.lastActive?.getTime() ?? 0));
    } else {
      rows.sort((a, b) => b.launches - a.launches || b.graduated - a.graduated);
    }

    return NextResponse.json({
      leaderboard: rows.slice(0, limit).map((r) => ({
        ...r,
        lastActive: r.lastActive ? r.lastActive.toISOString() : null,
      })),
    });
  } catch (err) {
    console.error("[api/leaderboard] db error", err);
    if (isDatabaseBootError(err)) {
      return NextResponse.json(
        { error: "database_not_initialized", message: "The registry database schema is not initialized yet. It is created automatically on server start; if this persists, run npx prisma migrate deploy." },
        { status: 503, headers: { "retry-after": "30" } },
      );
    }
    return NextResponse.json({ error: "database_error" }, { status: 500 });
  }
}
