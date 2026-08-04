import dotenv from "dotenv";
import app from "./src/app.js";

const PORT = process.env.PORT;

dotenv.config();

app.listen(PORT, () => {
    console.log(`Servidor ativo na porta: ${PORT}`);
})