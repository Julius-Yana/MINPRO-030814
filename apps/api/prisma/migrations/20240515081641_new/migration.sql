/*
  Warnings:

  - You are about to drop the column `isOrganizer` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `User` DROP COLUMN `isOrganizer`,
    ADD COLUMN `role` ENUM('superadmin', 'user', 'organizer') NOT NULL DEFAULT 'user';
