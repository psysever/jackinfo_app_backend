/*
  Warnings:

  - A unique constraint covering the columns `[photoId,userId]` on the table `Like` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Like_photoId_userId_photoCssId_key";

-- CreateTable
CREATE TABLE "LikeCss" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "photoCssId" INTEGER NOT NULL,

    CONSTRAINT "LikeCss_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "LikeCss_userId_photoCssId_key" ON "LikeCss"("userId", "photoCssId");

-- CreateIndex
CREATE UNIQUE INDEX "Like_photoId_userId_key" ON "Like"("photoId", "userId");

-- AddForeignKey
ALTER TABLE "LikeCss" ADD CONSTRAINT "LikeCss_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LikeCss" ADD CONSTRAINT "LikeCss_photoCssId_fkey" FOREIGN KEY ("photoCssId") REFERENCES "PhotoCss"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
