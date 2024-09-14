import { Request, Response } from "express";
import { EndTaskService } from "../../services/tarefa/EndTaskService";

class EndTaskController{
    async handle(req: Request, res: Response){
        const task_id = req.query.task_id as String;

        const endTaskService = new EndTaskService();

        const task = endTaskService.execute(task_id);

        return res.json(task);
    }
}

export { EndTaskController }