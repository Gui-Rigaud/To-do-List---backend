import { Router, Request, Response } from "express";
import { CreateMemberController } from "./controllers/membro/CreateMemberController";
import { DetailMemberController } from "./controllers/membro/DetailMemberController";

const router = Router();

/* Rotas de Membro */
router.post('/membro', new CreateMemberController().handle)

export {router};