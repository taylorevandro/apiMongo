import express from "express";
import pool from "../database/connection.js";
import { auth } from "../middlewares/auth.middleware.js";
import { paginate } from "../middlewares/paginate.middleware.js";

import{
    movieAll, searchMovie, addMovie, modifyMovie, removeMovie
} from "../controllers/movie.controller.js";

const router = express.Router();

router.get("/filmes", auth, paginate, movieAll);
router.get("/filmes/:id", auth, searchMovie);
router.put("/filmes/:id", auth, modifyMovie);
router.post("/filmes", auth, addMovie);
router.delete("/filmes/:id", auth, removeMovie);

export default router;