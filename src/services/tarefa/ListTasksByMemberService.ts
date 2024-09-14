import prismaClient from "../../prisma";

class ListTasksByMemberService{
    async execute(member_id: String){
        const tasks = await prismaClient.tarefa.findMany({
            where:{
                member_id: `${member_id}`
            },
        })

        return tasks;
    }
}

export { ListTasksByMemberService }