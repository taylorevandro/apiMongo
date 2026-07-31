import express from "express";
import pool from "./database/connection.js";
import movieRoutes from "./routes/movie.route.js";


const app = express();

app.use(express.json());


app.use("/", movieRoutes);

export default app;

