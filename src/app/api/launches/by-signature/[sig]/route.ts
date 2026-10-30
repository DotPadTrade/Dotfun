import { getDb } from "@/lib/db";
import { NextResponse } from "next/server";

/** GET /api/launches/by-signature/[sig] — launch record lookup for status pages. */
export async function GET(
  _req: Request,
  ctx: { params: Promise<{ sig: string }> },
) {
  const db = getDb();
  if (!db) {
    return NextResponse.json({ error: "database_not_configured" }, { status: 503 });
  }
  const { sig } = await ctx.params;
  try {
    const launch = await db.launch.findFirst({
      where: { signature: sig },
      include: { timeline: { orderBy: { createdAt: "asc" } } },
    });
    if (!launch) return NextResponse.json({ error: "not_found" }, { status: 404 });
    return NextResponse.json(launch);
  } catch (err) {
    console.error("[api/launches/by-signature] db error", err);
    return NextResponse.json({ error: "database_error" }, { status: 500 });
  }
}
