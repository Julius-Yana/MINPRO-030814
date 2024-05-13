/*
  Warnings:

  - You are about to drop the column `expriraionDate` on the `Discount` table. All the data in the column will be lost.
  - Added the required column `expirationDate` to the `Discount` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Discount` DROP COLUMN `expriraionDate`,
    ADD COLUMN `expirationDate` DATETIME(3) NOT NULL;
