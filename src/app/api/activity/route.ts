import { NextResponse } from "next/server";
import { getDb } from "@/lib/db";

/**
 * GET /api/activity — recent lifecycle events from RelayPad's registry,
 * joined with their launch. Powers the Live Launches feed. Real records
 * only; the client polls and renders honest empty states.
 */
export async function GET(req: Request) {
  const db = getDb();
  if (!db) {
    return NextResponse.json({ error: "database_not_configured" }, { status: 503 });
  }
  const url = new URL(req.url);
  const limit = Math.min(Number(url.searchParams.get("limit") ?? 40) || 40, 100);
  try {
    const events = await db.launchEvent.findMany({
      orderBy: { createdAt: "desc" },
      take: limit,
      include: {
        launch: {
          select: {
            id: true,
            name: true,
            symbol: true,
            route: true,
            status: true,
            mintAddress: true,
            imageUrl: true,
          },
        },
      },
    });
    return NextResponse.json({
      events: events.map((e) => ({
        id: e.id,
        kind: e.kind,
        createdAt: e.createdAt,
        launch: e.launch,
      })),
    });
  } catch (err) {
    console.error("[api/activity] db error", err);
    return NextResponse.json({ error: "database_error" }, { status: 500 });
  }
}
