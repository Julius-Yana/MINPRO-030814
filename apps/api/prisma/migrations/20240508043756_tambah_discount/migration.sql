/*
  Warnings:

  - You are about to drop the column `Total_Point` on the `Point` table. All the data in the column will be lost.
  - Added the required column `expirationDate` to the `Point` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Point` DROP COLUMN `Total_Point`,
    ADD COLUMN `Amount` INTEGER NOT NULL DEFAULT 0,
    ADD COLUMN `expirationDate` DATETIME(3) NOT NULL;

-- CreateTable
CREATE TABLE `Discount` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `discount` INTEGER NOT NULL DEFAULT 0,
    `expriraionDate` DATETIME(3) NOT NULL,
    `userId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Discount` ADD CONSTRAINT `Discount_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
