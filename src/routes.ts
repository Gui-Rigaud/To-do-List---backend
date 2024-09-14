import { Router, Request, Response } from "express";
import { CreateMemberController } from "./controllers/membro/CreateMemberController";
import { DetailMemberController } from "./controllers/membro/DetailMemberController";
import { AuthMemberController } from "./controllers/membro/AuthMemberController";
import { isAuthenticated } from "./middlewares/isAuthenticated";
import { CreateTaskController } from "./controllers/tarefa/CreateTaskController";
import { ListTasksByMemberController } from "./controllers/tarefa/ListTasksByMemberController";
import { EndTaskController } from "./controllers/tarefa/EndTaskController";

const router = Router();

/* Rotas de Membro */
router.post('/membro', new CreateMemberController().handle)

router.post('/session', new AuthMemberController().handle)

router.get('/me', isAuthenticated, new DetailMemberController().handle)

/* Rotas de tarefas */
router.post('/tarefa', isAuthenticated, new CreateTaskController().handle)

router.get('/membro/tarefa', isAuthenticated, new ListTasksByMemberController().handle)

router.put('/tarefa/end', isAuthenticated, new EndTaskController().handle)

export {router};