import { Request, Response } from 'express';
import { AuthMemberService } from '../../services/membro/AuthMemberService';

class AuthMemberController{
    async handle( req: Request, res: Response ){
        const {email, password} = req.body;

        const authMemberService = new AuthMemberService();

        const auth = await authMemberService.execute({
            email,
            password
        })

        return res.json(auth);
    }
}

export { AuthMemberController }