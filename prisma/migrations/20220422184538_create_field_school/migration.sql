/*
  Warnings:

  - Added the required column `school_id` to the `rooms` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "rooms" ADD COLUMN     "school_id" TEXT NOT NULL;
