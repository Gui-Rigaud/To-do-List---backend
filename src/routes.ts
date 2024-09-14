import { Router, Request, Response } from "express";
import { CreateMemberController } from "./controllers/membro/CreateMemberController";
import { DetailMemberController } from "./controllers/membro/DetailMemberController";
import { AuthMemberController } from "./controllers/membro/AuthMemberController";
import { isAuthenticated } from "./middlewares/isAuthenticated";

const router = Router();

/* Rotas de Membro */
router.post('/membro', new CreateMemberController().handle)

router.post('/session', new AuthMemberController().handle)

router.get('/me', isAuthenticated, new DetailMemberController().handle)

export {router};