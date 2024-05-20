/*
  Warnings:

  - Added the required column `discount` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `kuotaDiscount` to the `Event` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Event` ADD COLUMN `discount` INTEGER NOT NULL,
    ADD COLUMN `kuotaDiscount` INTEGER NOT NULL;
