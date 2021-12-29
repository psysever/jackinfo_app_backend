-- DropForeignKey
ALTER TABLE "Like" DROP CONSTRAINT "Like_photoCssId_fkey";

-- AlterTable
ALTER TABLE "Like" ALTER COLUMN "photoCssId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Like" ADD CONSTRAINT "Like_photoCssId_fkey" FOREIGN KEY ("photoCssId") REFERENCES "PhotoCss"("id") ON DELETE SET NULL ON UPDATE CASCADE;
