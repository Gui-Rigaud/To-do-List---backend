import prismaClient from "../../prisma";

class DeleteTaskService{
    async execute(task_id: String){
        const task = prismaClient.tarefa.delete({
            where:{
                id: `${task_id}`
            }
        })

        return task;
    }
}

export { DeleteTaskService }