import express from "express";
import Pool from "../database/connection.js";
import { genreAll, searchGenre, addGenre, modifyGenre } from "../controllers/genre.controller.js";

const router = express.Router();

router.get("/generos", genreAll);
router.get("/genero/:id", searchGenre);
router.post("/genero", addGenre);
router.put("/genero/:id", modifyGenre);

export default router;