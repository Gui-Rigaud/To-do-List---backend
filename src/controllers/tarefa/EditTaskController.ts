import { Response, Request } from "express";
import { EditTaskService } from "../../services/tarefa/EditTaskService";

class EditTaskController{
    async handle(req: Request, res: Response){
        const task_id = req.query.task_id as String;

        const {nome, description, priority, done} = req.body;

        const editTaskService = new EditTaskService();

        const task = editTaskService.execute({id: task_id, nome, description, priority, done})

        return res.json(task);
    }
}

export { EditTaskController }