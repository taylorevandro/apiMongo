import express from "express";
import Pool from "../database/connection.js";
import { genreAll, searchGenre, addGenre, modifyGenre } from "../controllers/genre.controller.js";
import { auth } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.get("/generos", auth, genreAll);
router.get("/genero/:id", auth, searchGenre);
router.post("/genero", auth, addGenre);
router.put("/genero/:id", auth, modifyGenre);

export default router;