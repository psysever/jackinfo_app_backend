/*
  Warnings:

  - A unique constraint covering the columns `[photoId,userId,photoCssId]` on the table `Like` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Like_photoId_userId_key";

-- CreateIndex
CREATE UNIQUE INDEX "Like_photoId_userId_photoCssId_key" ON "Like"("photoId", "userId", "photoCssId");
