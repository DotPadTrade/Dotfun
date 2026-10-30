-- CreateTable
CREATE TABLE "RelayOfficialActivity" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "signature" TEXT NOT NULL,
    "entryKey" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "slot" INTEGER,
    "blockTime" DATETIME,
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
    "verifiedAt" DATETIME
);

-- CreateTable
CREATE TABLE "RelayOfficialIndexState" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "key" TEXT NOT NULL,
    "lastRunAt" DATETIME,
    "lastStatus" TEXT,
    "lastError" TEXT,
    "lastSignature" TEXT,
    "lastReconciledAt" DATETIME
);

-- CreateIndex
CREATE UNIQUE INDEX "RelayOfficialActivity_signature_entryKey_key" ON "RelayOfficialActivity"("signature", "entryKey");

-- CreateIndex
CREATE INDEX "RelayOfficialActivity_type_blockTime_idx" ON "RelayOfficialActivity"("type", "blockTime");

-- CreateIndex
CREATE INDEX "RelayOfficialActivity_signature_idx" ON "RelayOfficialActivity"("signature");

-- CreateIndex
CREATE INDEX "RelayOfficialActivity_walletRole_blockTime_idx" ON "RelayOfficialActivity"("walletRole", "blockTime");

-- CreateIndex
CREATE INDEX "RelayOfficialActivity_sender_idx" ON "RelayOfficialActivity"("sender");

-- CreateIndex
CREATE INDEX "RelayOfficialActivity_recipient_idx" ON "RelayOfficialActivity"("recipient");

-- CreateIndex
CREATE UNIQUE INDEX "RelayOfficialIndexState_key_key" ON "RelayOfficialIndexState"("key");
