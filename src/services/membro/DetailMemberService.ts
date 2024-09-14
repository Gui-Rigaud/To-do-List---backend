import prismaClient from "../../prisma";

class DetailMemberService{
    async execute(member_id: String){
        const member = await prismaClient.membro.findFirst({
            where:{
                id: `${member_id}`
            },
            select:{
                id: true,
                nome: true,
                email: true
            }
        })

        return member;
    }
}

export { DetailMemberService }