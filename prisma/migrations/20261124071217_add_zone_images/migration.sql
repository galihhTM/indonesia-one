-- CreateTable
CREATE TABLE "ZoneImage" (
    "id" TEXT NOT NULL,
    "zoneId" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "ZoneImage_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ZoneImage" ADD CONSTRAINT "ZoneImage_zoneId_fkey" FOREIGN KEY ("zoneId") REFERENCES "Zone"("id") ON DELETE CASCADE ON UPDATE CASCADE;
