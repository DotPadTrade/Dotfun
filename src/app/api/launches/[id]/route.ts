import { NextResponse } from "next/server";
import { z } from "zod";
import type { Prisma } from "@prisma/client";
import { getDb } from "@/lib/db";
import { resolveLaunch } from "@/lib/reconcile";

/**
 * GET  /api/launches/[id] — launch record with timeline (id or mint address).
 * POST /api/launches/[id] — record a client-observed event idempotently
 * (dedupeKey unique per launch) and reconcile lifecycle facts on-chain.
 */

export async function GET(
  _req: Request,
  ctx: { params: Promise<{ id: string }> },
) {
  const db = getDb();
  if (!db) {
    return NextResponse.json({ error: "database_not_configured" }, { status: 503 });
  }
  const { id } = await ctx.params;
  try {
    const launch = await db.launch.findFirst({
      where: { OR: [{ id }, { mintAddress: id }] },
      include: { timeline: { orderBy: { createdAt: "asc" } } },
    });
    if (!launch) {
      return NextResponse.json({ error: "not_found" }, { status: 404 });
    }
    return NextResponse.json(launch);
  } catch (err) {
    console.error("[api/launches/:id] db error", err);
    return NextResponse.json({ error: "database_error" }, { status: 500 });
  }
}

const eventSchema = z.object({
  kind: z.enum([
    "submitted",
    "confirmed",
    "curve_trading",
    "graduation_detected",
    "pool_verified",
    "failed",
    "unresolved",
  ]),
  mintAddress: z.string().max(64).optional(),
  signature: z.string().max(128).optional(),
  slot: z.number().int().nonnegative().optional(),
  detail: z.record(z.unknown()).optional(),
  error: z.string().max(2000).optional(),
});

export async function POST(
  req: Request,
  ctx: { params: Promise<{ id: string }> },
) {
  const db = getDb();
  if (!db) {
    return NextResponse.json({ error: "database_not_configured" }, { status: 503 });
  }
  const { id } = await ctx.params;

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }
  const parsed = eventSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "validation_failed", issues: parsed.error.flatten() },
      { status: 400 },
    );
  }
  const ev = parsed.data;

  try {
    const launch = await db.launch.findFirst({
      where: { OR: [{ id }, { mintAddress: id }] },
    });
    if (!launch) {
      return NextResponse.json({ error: "not_found" }, { status: 404 });
    }

    // Idempotent event write: unique (launchId, dedupeKey).
    const dedupeKey = `${ev.kind}:${ev.signature ?? ev.slot ?? "na"}`;
    await db.launchEvent.upsert({
      where: { launchId_dedupeKey: { launchId: launch.id, dedupeKey } },
      create: { launchId: launch.id, kind: ev.kind, dedupeKey, detail: (ev.detail ?? {}) as Prisma.InputJsonValue },
      update: {},
    });

    // Bind client-supplied provenance (write-once): the launch record is
    // created mint-less by design — the mint keypair is generated during
    // client-side preparation — so the first event that carries the mint +
    // signature binds them to the record. Existing values are never
    // overwritten (no cross-mint re-attribution), and status changes are
    // left entirely to resolveLaunch, which re-validates everything against
    // the chain before promoting the record.
    const provenance: Prisma.LaunchUpdateInput = {};
    if (ev.mintAddress && launch.mintAddress == null) provenance.mintAddress = ev.mintAddress;
    if (ev.signature && launch.signature == null) provenance.signature = ev.signature;
    if (ev.slot != null && launch.slot == null) provenance.slot = ev.slot;
    if (Object.keys(provenance).length > 0) {
      await db.launch.update({ where: { id: launch.id }, data: provenance });
    }

    // Reconcile lifecycle facts from the chain (source of truth). Runs with
    // the freshly-bound provenance so the signature status / curve / pool
    // checks can actually execute (resolveLaunch early-returns on records
    // without a mint).
    const updated = await resolveLaunch(db, launch.id);
    return NextResponse.json({ launch: updated });
  } catch (err) {
    console.error("[api/launches/:id] db error", err);
    return NextResponse.json({ error: "database_error" }, { status: 500 });
  }
}
