/*
  Warnings:

  - You are about to drop the column `photoId` on the `PhotoCss` table. All the data in the column will be lost.
  - You are about to drop the `Photo` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_HashtagToPhoto` table. If the table is not empty, all the data it contains will be lost.
  - Made the column `photoCssId` on table `Hashtag` required. This step will fail if there are existing NULL values in that column.
  - Made the column `photoCssId` on table `Like` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Hashtag" DROP CONSTRAINT "Hashtag_photoCssId_fkey";

-- DropForeignKey
ALTER TABLE "Like" DROP CONSTRAINT "Like_photoCssId_fkey";

-- DropForeignKey
ALTER TABLE "Like" DROP CONSTRAINT "Like_photoId_fkey";

-- DropForeignKey
ALTER TABLE "Photo" DROP CONSTRAINT "Photo_userId_fkey";

-- DropForeignKey
ALTER TABLE "PhotoCss" DROP CONSTRAINT "PhotoCss_photoId_fkey";

-- DropForeignKey
ALTER TABLE "_HashtagToPhoto" DROP CONSTRAINT "_HashtagToPhoto_A_fkey";

-- DropForeignKey
ALTER TABLE "_HashtagToPhoto" DROP CONSTRAINT "_HashtagToPhoto_B_fkey";

-- AlterTable
ALTER TABLE "Hashtag" ALTER COLUMN "photoCssId" SET NOT NULL;

-- AlterTable
ALTER TABLE "Like" ALTER COLUMN "photoCssId" SET NOT NULL;

-- AlterTable
ALTER TABLE "PhotoCss" DROP COLUMN "photoId";

-- DropTable
DROP TABLE "Photo";

-- DropTable
DROP TABLE "_HashtagToPhoto";

-- CreateTable
CREATE TABLE "PhotoNode" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "file" TEXT NOT NULL,
    "caption" TEXT,
    "skils" TEXT,
    "subject" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PhotoNode_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_HashtagToPhotoNode" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_HashtagToPhotoNode_AB_unique" ON "_HashtagToPhotoNode"("A", "B");

-- CreateIndex
CREATE INDEX "_HashtagToPhotoNode_B_index" ON "_HashtagToPhotoNode"("B");

-- AddForeignKey
ALTER TABLE "PhotoNode" ADD CONSTRAINT "PhotoNode_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Hashtag" ADD CONSTRAINT "Hashtag_photoCssId_fkey" FOREIGN KEY ("photoCssId") REFERENCES "PhotoCss"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Like" ADD CONSTRAINT "Like_photoId_fkey" FOREIGN KEY ("photoId") REFERENCES "PhotoNode"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Like" ADD CONSTRAINT "Like_photoCssId_fkey" FOREIGN KEY ("photoCssId") REFERENCES "PhotoCss"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_HashtagToPhotoNode" ADD FOREIGN KEY ("A") REFERENCES "Hashtag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_HashtagToPhotoNode" ADD FOREIGN KEY ("B") REFERENCES "PhotoNode"("id") ON DELETE CASCADE ON UPDATE CASCADE;
