-- CreateTable
CREATE TABLE "Launch" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "creatorWallet" TEXT NOT NULL,
    "route" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'PREPARATION',
    "name" TEXT NOT NULL,
    "symbol" TEXT NOT NULL,
    "description" TEXT,
    "metadataUri" TEXT,
    "imageUrl" TEXT,
    "network" TEXT NOT NULL,
    "mintAddress" TEXT,
    "signature" TEXT,
    "slot" INTEGER,
    "blockTime" DATETIME,
    "idempotencyKey" TEXT NOT NULL,
    "poolAddress" TEXT,
    "poolVerifiedAt" DATETIME,
    "curveState" JSONB,
    "lastError" TEXT
);

-- CreateTable
CREATE TABLE "LaunchEvent" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "launchId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "kind" TEXT NOT NULL,
    "detail" JSONB,
    "dedupeKey" TEXT NOT NULL,
    CONSTRAINT "LaunchEvent_launchId_fkey" FOREIGN KEY ("launchId") REFERENCES "Launch" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "UploadAudit" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "uploader" TEXT NOT NULL,
    "fileName" TEXT NOT NULL,
    "sizeBytes" INTEGER NOT NULL,
    "mime" TEXT NOT NULL,
    "cid" TEXT,
    "status" TEXT NOT NULL,
    "reason" TEXT
);

-- CreateIndex
CREATE UNIQUE INDEX "Launch_mintAddress_key" ON "Launch"("mintAddress");

-- CreateIndex
CREATE UNIQUE INDEX "Launch_idempotencyKey_key" ON "Launch"("idempotencyKey");

-- CreateIndex
CREATE INDEX "Launch_creatorWallet_createdAt_idx" ON "Launch"("creatorWallet", "createdAt");

-- CreateIndex
CREATE INDEX "Launch_status_idx" ON "Launch"("status");

-- CreateIndex
CREATE INDEX "Launch_route_idx" ON "Launch"("route");

-- CreateIndex
CREATE INDEX "LaunchEvent_launchId_idx" ON "LaunchEvent"("launchId");

-- CreateIndex
CREATE UNIQUE INDEX "LaunchEvent_launchId_dedupeKey_key" ON "LaunchEvent"("launchId", "dedupeKey");
