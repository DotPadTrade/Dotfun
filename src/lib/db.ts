import { PrismaClient } from "@prisma/client";

/**
 * Lazily-created Prisma client. Returns null when DATABASE_URL is absent so
 * API routes can degrade with an explicit, honest error rather than crashing.
 * Launch persistence is required for the registry/dashboard features; the
 * core client-side launch flow continues to work without it.
 */

const globalForPrisma = globalThis as unknown as { relaypadPrisma?: PrismaClient };

export function getDb(): PrismaClient | null {
  if (!process.env.DATABASE_URL) return null;
  if (!globalForPrisma.relaypadPrisma) {
    globalForPrisma.relaypadPrisma = new PrismaClient({
      log: process.env.NODE_ENV === "development" ? ["warn", "error"] : ["error"],
    });
  }
  return globalForPrisma.relaypadPrisma;
}
