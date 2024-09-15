import { Response, Request } from "express";
import { DeleteTaskService } from "../../services/tarefa/DeleteTaskService";

class DeleteTaskController{
    async handle(req: Request, res: Response){
        const task_id = req.query.task_id as String;

        const deleteTaskService = new DeleteTaskService();

        const task = deleteTaskService.execute(task_id);

        return res.json(task);
    }
}

export {DeleteTaskController};