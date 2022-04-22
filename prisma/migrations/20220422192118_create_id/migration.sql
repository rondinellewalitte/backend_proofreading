/*
  Warnings:

  - You are about to drop the column `room` on the `test` table. All the data in the column will be lost.
  - You are about to drop the column `school` on the `test` table. All the data in the column will be lost.
  - Added the required column `id_room` to the `test` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_school` to the `test` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "test" DROP COLUMN "room",
DROP COLUMN "school",
ADD COLUMN     "id_room" TEXT NOT NULL,
ADD COLUMN     "id_school" TEXT NOT NULL;
