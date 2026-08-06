import express from "express";
import Pool from "../database/connection.js";
import {addUser, login, searchAccount, setPassowrd, valideCode} from "../controllers/user.controller.js";
import { auth } from "../middlewares/auth.middleware.js";
import { basicAuth } from "../middlewares/basic.middleware.js";

const router = express.Router();

router.post("/usuario/login", basicAuth, login);
router.post("/usuario/cadastro", auth, addUser);
router.post("/usuario/reset", auth, searchAccount);
router.put("/usuario/resetLogin", auth, setPassowrd);
router.post("/usuario/validaCodigo", auth, valideCode);

export default router

