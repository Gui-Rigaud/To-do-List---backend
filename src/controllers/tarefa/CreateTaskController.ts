import { Response, Request } from "express";
import { CreateTaskService } from "../../services/tarefa/CreateTaskService";

class CreateTaskController{
    async handle(req: Request, res: Response){
        const { nome, description, priority, member_id } = req.body;

        const createTaskService = new CreateTaskService();

        const task = await createTaskService.execute({ nome, description, priority, member_id });

        return res.json(task);
    }
}

export { CreateTaskController }