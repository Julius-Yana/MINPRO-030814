/*
  Warnings:

  - You are about to drop the `Referral` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Referral` DROP FOREIGN KEY `Referral_userId_fkey`;

-- DropTable
DROP TABLE `Referral`;

-- CreateTable
CREATE TABLE `Refferal` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `refferalCode` VARCHAR(191) NOT NULL,
    `userId` INTEGER NOT NULL,

    UNIQUE INDEX `Refferal_refferalCode_key`(`refferalCode`),
    UNIQUE INDEX `Refferal_userId_key`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Refferal` ADD CONSTRAINT `Refferal_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
