/*
  Warnings:

  - Added the required column `type_test` to the `test` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "test" ADD COLUMN     "type_test" TEXT NOT NULL;
