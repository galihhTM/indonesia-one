/*
  Warnings:

  - You are about to drop the column `imageUrl` on the `UnitType` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "UnitType" DROP COLUMN "imageUrl",
ADD COLUMN     "images" TEXT[];
