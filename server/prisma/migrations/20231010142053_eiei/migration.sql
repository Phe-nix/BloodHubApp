/*
  Warnings:

  - You are about to drop the `Donation` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Donation` DROP FOREIGN KEY `Donation_userId_fkey`;

-- DropTable
DROP TABLE `Donation`;

-- CreateTable
CREATE TABLE `DonationHistory` (
    `id` VARCHAR(191) NOT NULL,
    `blood_type` ENUM('A_POSITIVE', 'B_POSITIVE', 'O_POSITIVE', 'AB_POSITIVE', 'A_NEGATIVE', 'B_NEGATIVE', 'O_NEGATIVE', 'AB_NEGATIVE') NOT NULL,
    `status` ENUM('PENDING', 'APPOINTED', 'DENIED') NOT NULL,
    `updated_at` DATETIME(3) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `userId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `DonationHistory` ADD CONSTRAINT `DonationHistory_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
