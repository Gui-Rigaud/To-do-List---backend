-- CreateTable
CREATE TABLE `tarefas` (
    `id` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(50) NOT NULL,
    `description` VARCHAR(140) NOT NULL,
    `done` BOOLEAN NOT NULL DEFAULT false,
    `finish_date` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `priority` VARCHAR(10) NOT NULL DEFAULT 'Baixa',

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
