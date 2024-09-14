/*
  Warnings:

  - Added the required column `member_id` to the `tarefas` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `tarefas` ADD COLUMN `member_id` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `tarefas` ADD CONSTRAINT `tarefas_member_id_fkey` FOREIGN KEY (`member_id`) REFERENCES `membros`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
