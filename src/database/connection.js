import "dotenv/config";
import { Pool } from "pg";

const pool = new Pool({
    ssl: {
        rejectUnauthorized: false
    }
});

async function testConnection() {
    try {
        const result = await pool.query("SELECT NOW()");
        console.log("Conectado ao banco!");
        console.log(result.rows[0]);
    } catch (error) {
        console.error("Erro ao conectar:", error.message);
    }
}

testConnection();

export default pool;