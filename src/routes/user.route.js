import express from "express";
import Pool from "../database/connection.js";
import {addUser, login, searchAccount, setPassowrd} from "../controllers/user.controller.js";
import { auth } from "../middlewares/auth.middleware.js";
import { basicAuth } from "../middlewares/basic.middleware.js";

const router = express.Router();

router.post("/usuario/login", basicAuth, login);
router.post("/usuario/cadastro", auth, addUser);
router.get("/usuario/:user", auth, searchAccount);
router.put("/usuario/resetlogin", auth, setPassowrd);

export default router

