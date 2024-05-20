/*
  Warnings:

  - You are about to drop the column `price` on the `Event` table. All the data in the column will be lost.
  - Added the required column `freeEvent` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `priceRegular` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `priceVip` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quotaRegular` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quotaVip` to the `Event` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Event` DROP COLUMN `price`,
    ADD COLUMN `freeEvent` BOOLEAN NOT NULL,
    ADD COLUMN `priceRegular` INTEGER NOT NULL,
    ADD COLUMN `priceVip` INTEGER NOT NULL,
    ADD COLUMN `quotaRegular` INTEGER NOT NULL,
    ADD COLUMN `quotaVip` INTEGER NOT NULL;
