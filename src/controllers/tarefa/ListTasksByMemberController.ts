import { Response, Request } from "express";
import { ListTasksByMemberService } from "../../services/tarefa/ListTasksByMemberService";

class ListTasksByMemberController{
    async handle(req: Request, res: Response){
        const member_id = req.query.member_id as String;

        const listTasksByMemberService = new ListTasksByMemberService();

        const tasks = await listTasksByMemberService.execute(member_id);

        return res.json(tasks);
    }
}

export { ListTasksByMemberController }