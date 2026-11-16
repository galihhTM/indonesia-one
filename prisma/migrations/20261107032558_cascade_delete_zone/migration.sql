-- DropForeignKey
ALTER TABLE "Facility" DROP CONSTRAINT "Facility_zoneId_fkey";

-- DropForeignKey
ALTER TABLE "FloorPlan" DROP CONSTRAINT "FloorPlan_zoneId_fkey";

-- AddForeignKey
ALTER TABLE "Facility" ADD CONSTRAINT "Facility_zoneId_fkey" FOREIGN KEY ("zoneId") REFERENCES "Zone"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FloorPlan" ADD CONSTRAINT "FloorPlan_zoneId_fkey" FOREIGN KEY ("zoneId") REFERENCES "Zone"("id") ON DELETE CASCADE ON UPDATE CASCADE;
