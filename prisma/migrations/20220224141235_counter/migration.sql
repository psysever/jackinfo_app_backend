/*
  Warnings:

  - You are about to drop the column `totalCount` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "totalCount";

-- CreateTable
CREATE TABLE "TotalCount" (
    "id" SERIAL NOT NULL,
    "views" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "TotalCount_pkey" PRIMARY KEY ("id")
);
