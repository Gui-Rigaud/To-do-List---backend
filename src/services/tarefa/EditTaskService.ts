import prismaClient from "../../prisma";

interface EditTaskProps{
    id: String;
    nome: String | undefined;
    description: String | undefined;
    priority: String | undefined;
    done: boolean | undefined;
}

class EditTaskService{
    async execute({id, nome, description, priority, done}: EditTaskProps){
        const task_id = id;

        const task = prismaClient.tarefa.update({
            where:{
                id: `${task_id}`
            },
            data:{
                nome: `${nome}` || undefined,
                description: `${description}` || undefined,
                priority: `${priority}` || undefined,
                done: done || undefined
            }
        })

        return task;
    }
}

export { EditTaskService }