import { Response, Request } from "express";
import { DetailMemberService } from "../../services/membro/DetailMemberService";


class DetailMemberController{
    async handle(req: Request, res: Response){
        const member_id = req.member_id;

        const detailMemberService = new DetailMemberService();

        const member = await detailMemberService.execute(member_id);

        return res.json(member);
    }
}

export {DetailMemberController}