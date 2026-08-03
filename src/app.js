import express from "express";
import pool from "./database/connection.js";
import router from "./routes/index.js";


const app = express();
router(app);

export default app;

