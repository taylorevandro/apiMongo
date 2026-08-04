import dotenv from "dotenv";
import app from "./src/app.js";
import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./src/config/swagger.js";

const PORT = process.env.PORT;

// console.log("HOST:", process.env.PGHOST);
// console.log("USER:", process.env.PGUSER);
// console.log("DATABASE:", process.env.PGDATABASE);

dotenv.config();

app.listen(PORT, () => {
    console.log(`Servidor ativo na porta: ${PORT}`);
})