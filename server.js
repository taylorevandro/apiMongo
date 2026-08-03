import dotenv from "dotenv";
import app from "./src/app.js";

const PORT = 3000;


dotenv.config();

app.listen(PORT, () => {
    console.log("Servidor ativo na porta:",PORT);
})