/*
  Warnings:

  - You are about to drop the `FloorPlan` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `RoomPoint` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "FacilityImage" DROP CONSTRAINT "FacilityImage_facilityId_fkey";

-- DropForeignKey
ALTER TABLE "FloorPlan" DROP CONSTRAINT "FloorPlan_zoneId_fkey";

-- DropForeignKey
ALTER TABLE "RoomPoint" DROP CONSTRAINT "RoomPoint_floorPlanId_fkey";

-- DropTable
DROP TABLE "FloorPlan";

-- DropTable
DROP TABLE "RoomPoint";

-- CreateTable
CREATE TABLE "UnitType" (
    "id" TEXT NOT NULL,
    "facilityId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "totalUnits" INTEGER,
    "areaSGA" DOUBLE PRECISION,
    "description" TEXT,
    "imageUrl" TEXT,

    CONSTRAINT "UnitType_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "FacilityImage" ADD CONSTRAINT "FacilityImage_facilityId_fkey" FOREIGN KEY ("facilityId") REFERENCES "Facility"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UnitType" ADD CONSTRAINT "UnitType_facilityId_fkey" FOREIGN KEY ("facilityId") REFERENCES "Facility"("id") ON DELETE CASCADE ON UPDATE CASCADE;
