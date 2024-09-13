import prismaClient from "../../prisma";
import {hash} from 'bcryptjs'

interface MemberRequest {
    nome: String;
    email: String;
    password: String;
}

class CreateMemberService {
    async execute({nome, email, password}: MemberRequest){
        if(!email){
            throw new Error("Email incorrect")
        }

        const memberAlreadyExists = await prismaClient.membro.findFirst({
            where: {
                email: `${email}`
            }
        })

        if (memberAlreadyExists){
            throw new Error("Member already exists")
        }

        const passwordHash = await hash(`${password}`, 8)

        const member = await prismaClient.membro.create({
            data: {
                nome: `${nome}`,
                email: `${email}`,
                password: `${passwordHash}`,
            },
            select:{
                id: true,
                nome: true,
                email: true
            }
        });

        return member;
    }
}

export { CreateMemberService }