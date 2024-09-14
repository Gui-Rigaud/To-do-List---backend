import prismaClient from "../../prisma";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

interface AuthRequest {
    email: String;
    password: String;
}

class AuthMemberService {
    async execute({ email, password }: AuthRequest) {
        //verificar se o email existe
        const member = await prismaClient.membro.findFirst({
            where: {
                email: `${email}`
            }
        })

        if (!member) {
            throw new Error("User/password incorrect")
        }

        //preciso verificar se a senha que ele mandou está correta
        const passwordMatch = await compare(`${password}`, member.password)

        if (!passwordMatch) {
            throw new Error("User/password incorrect")
        }

        //gerar um token JWT e devolver os dados do usuário como id, name e email
        const token = sign(
            {
                nome: member.nome,
                email: member.email,
            },
            process.env.JWT_SECRET,
            {
                subject: member.id,
                expiresIn: '30d'
            }
        );

        return { 
            id: member.id,
            nome: member.nome,
            email: member.email,
            token: token
         }
    }
}

export { AuthMemberService };