import prismaClient from "../../prisma";

class EndTaskService{
    async execute(task_id: String){
        const task = prismaClient.tarefa.update({
            where:{
                id: `${task_id}`
            },
            data:{
                done: true
            }
        })

        return task;
    }
}

export { EndTaskService }