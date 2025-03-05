import { Router } from "express";
import UsuarioController from "../controllers/usuario.controller";

const router = Router();

router.post('/login', UsuarioController.loginUser)

export default router