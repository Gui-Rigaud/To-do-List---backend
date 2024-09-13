import { Response, Request, response } from "express";
import { CreateMemberService } from "../../services/membro/CreateMemberService";

class CreateMemberController{
    async handle(req: Request, res: Response){
        const { nome, email, password } = req.body;

        const createMemberService = new CreateMemberService();

        const member = await createMemberService.execute({nome, email, password});

        return res.json(member);
    }
}

export {CreateMemberController}