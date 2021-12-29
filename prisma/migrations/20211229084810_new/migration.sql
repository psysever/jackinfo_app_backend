-- AlterTable
ALTER TABLE "Hashtag" ADD COLUMN     "photoCssId" INTEGER;

-- AlterTable
ALTER TABLE "Like" ADD COLUMN     "photoCssId" INTEGER;

-- CreateTable
CREATE TABLE "PhotoCss" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "file" TEXT NOT NULL,
    "caption" TEXT,
    "skils" TEXT,
    "subject" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "photoId" INTEGER,

    CONSTRAINT "PhotoCss_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Hashtag" ADD CONSTRAINT "Hashtag_photoCssId_fkey" FOREIGN KEY ("photoCssId") REFERENCES "PhotoCss"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Like" ADD CONSTRAINT "Like_photoCssId_fkey" FOREIGN KEY ("photoCssId") REFERENCES "PhotoCss"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PhotoCss" ADD CONSTRAINT "PhotoCss_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PhotoCss" ADD CONSTRAINT "PhotoCss_photoId_fkey" FOREIGN KEY ("photoId") REFERENCES "Photo"("id") ON DELETE SET NULL ON UPDATE CASCADE;
