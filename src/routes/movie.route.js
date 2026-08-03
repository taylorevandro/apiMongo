import express from "express";
import pool from "../database/connection.js";

import{
    movieAll, searchMovie, addMovie, modifyMovie, removeMovie
} from "../controllers/movie.controller.js";

const router = express.Router();

router.get("/filmes", movieAll);
router.get("/filmes/:id", searchMovie);
router.put("/filmes/:id", modifyMovie);
router.post("/filmes", addMovie);
router.delete("/filmes/:id", removeMovie);

export default router;