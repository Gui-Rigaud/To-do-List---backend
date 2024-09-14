import prismaClient from "../../prisma";

interface TaskRequest{
    nome: String;
    description: String;
    priority: String;
    member_id: String;
}

class CreateTaskService{
    async execute({ nome, description, priority, member_id }: TaskRequest){
        
        /* Restrições para nome e prioridade */
        if(nome.length < 5){
            throw new Error("Name is too small")
        }

        if(priority != "Baixa" && priority != "Média" && priority != "Alta"){
            throw new Error("Invalid value for priority")
        }

        /* Prioridade não informada */
        if(!priority){
            priority = "Baixa";
        }

        const task = await prismaClient.tarefa.create({
            data:{
                nome: `${nome}`,
                description: `${description}`,
                priority: `${priority}`,
                member_id: `${member_id}`
            },
            select: {
                id: true,
                nome: true,
                description: true,
                priority: true,
            }
        })

        return task;
    }
}

export { CreateTaskService }