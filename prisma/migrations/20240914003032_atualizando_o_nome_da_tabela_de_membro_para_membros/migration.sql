/*
  Warnings:

  - You are about to drop the `Membro` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `Membro`;

-- CreateTable
CREATE TABLE `membros` (
    `id` VARCHAR(191) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `nome` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;