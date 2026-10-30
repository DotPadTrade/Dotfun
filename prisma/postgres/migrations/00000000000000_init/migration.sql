-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "public";

-- CreateEnum
CREATE TYPE "public"."LaunchRoute" AS ENUM ('PUMP_PUMPSWAP', 'LAUNCHLAB_CPMM');

-- CreateEnum
CREATE TYPE "public"."LaunchStatus" AS ENUM ('PREPARATION', 'SUBMITTED', 'CONFIRMED', 'CURVE_TRADING', 'GRADUATION_DETECTED', 'POOL_VERIFIED', 'FAILED', 'UNRESOLVED');

-- CreateTable
CREATE TABLE "public"."Launch" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "creatorWallet" TEXT NOT NULL,
    "route" "public"."LaunchRoute" NOT NULL,
    "status" "public"."LaunchStatus" NOT NULL DEFAULT 'PREPARATION',
    "name" TEXT NOT NULL,
    "symbol" TEXT NOT NULL,
    "description" TEXT,
    "metadataUri" TEXT,
    "imageUrl" TEXT,
    "network" TEXT NOT NULL,
    "mintAddress" TEXT,
    "signature" TEXT,
    "slot" INTEGER,
    "blockTime" TIMESTAMP(3),
    "idempotencyKey" TEXT NOT NULL,
    "poolAddress" TEXT,
    "poolVerifiedAt" TIMESTAMP(3),
    "curveState" JSONB,
    "lastError" TEXT,

    CONSTRAINT "Launch_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."LaunchEvent" (
    "id" TEXT NOT NULL,
    "launchId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "kind" TEXT NOT NULL,
    "detail" JSONB,
    "dedupeKey" TEXT NOT NULL,

    CONSTRAINT "LaunchEvent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."UploadAudit" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "uploader" TEXT NOT NULL,
    "fileName" TEXT NOT NULL,
    "sizeBytes" INTEGER NOT NULL,
    "mime" TEXT NOT NULL,
    "cid" TEXT,
    "status" TEXT NOT NULL,
    "reason" TEXT,

    CONSTRAINT "UploadAudit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."RelayOfficialActivity" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "signature" TEXT NOT NULL,
    "entryKey" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "slot" INTEGER,
    "blockTime" TIMESTAMP(3),
    "walletRole" TEXT,
    "sender" TEXT,
    "recipient" TEXT,
    "inputAmount" TEXT,
    "inputAsset" TEXT,
    "inputDecimals" INTEGER,
    "outputAmount" TEXT,
    "outputAsset" TEXT,
    "outputDecimals" INTEGER,
    "burnMint" TEXT,
    "burnVerified" BOOLEAN NOT NULL DEFAULT false,
    "programId" TEXT,
    "network" TEXT NOT NULL,
    "detail" JSONB,
    "onChainVerified" BOOLEAN NOT NULL DEFAULT false,
    "verifiedAt" TIMESTAMP(3),

    CONSTRAINT "RelayOfficialActivity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."RelayOfficialIndexState" (
    "id" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "lastRunAt" TIMESTAMP(3),
    "lastStatus" TEXT,
    "lastError" TEXT,
    "lastSignature" TEXT,
    "lastReconciledAt" TIMESTAMP(3),

    CONSTRAINT "RelayOfficialIndexState_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Launch_mintAddress_key" ON "public"."Launch"("mintAddress");

-- CreateIndex
CREATE UNIQUE INDEX "Launch_idempotencyKey_key" ON "public"."Launch"("idempotencyKey");

-- CreateIndex
CREATE INDEX "Launch_creatorWallet_createdAt_idx" ON "public"."Launch"("creatorWallet", "createdAt");

-- CreateIndex
CREATE INDEX "Launch_status_idx" ON "public"."Launch"("status");

-- CreateIndex
CREATE INDEX "Launch_route_idx" ON "public"."Launch"("route");

-- CreateIndex
CREATE INDEX "LaunchEvent_launchId_idx" ON "public"."LaunchEvent"("launchId");

-- CreateIndex
CREATE UNIQUE INDEX "LaunchEvent_launchId_dedupeKey_key" ON "public"."LaunchEvent"("launchId", "dedupeKey");

-- CreateIndex
CREATE INDEX "RelayOfficialActivity_type_blockTime_idx" ON "public"."RelayOfficialActivity"("type", "blockTime");

-- CreateIndex
CREATE INDEX "RelayOfficialActivity_signature_idx" ON "public"."RelayOfficialActivity"("signature");

-- CreateIndex
CREATE INDEX "RelayOfficialActivity_walletRole_blockTime_idx" ON "public"."RelayOfficialActivity"("walletRole", "blockTime");

-- CreateIndex
CREATE INDEX "RelayOfficialActivity_sender_idx" ON "public"."RelayOfficialActivity"("sender");

-- CreateIndex
CREATE INDEX "RelayOfficialActivity_recipient_idx" ON "public"."RelayOfficialActivity"("recipient");

-- CreateIndex
CREATE UNIQUE INDEX "RelayOfficialActivity_signature_entryKey_key" ON "public"."RelayOfficialActivity"("signature", "entryKey");

-- CreateIndex
CREATE UNIQUE INDEX "RelayOfficialIndexState_key_key" ON "public"."RelayOfficialIndexState"("key");

-- AddForeignKey
ALTER TABLE "public"."LaunchEvent" ADD CONSTRAINT "LaunchEvent_launchId_fkey" FOREIGN KEY ("launchId") REFERENCES "public"."Launch"("id") ON DELETE CASCADE ON UPDATE CASCADE;

