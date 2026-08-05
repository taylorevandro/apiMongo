import "dotenv/config";
import { Pool } from "pg";
import nodemailer from "nodemailer";

const pool = new Pool({
    ssl: {
        rejectUnauthorized: false
    }
});


async function testandoSMTP() {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD
        }
    });
    
    transporter.verify((error, success) => {
    if (error) {
        console.log("Erro SMTP:", error);
    } else {
        console.log("Servidor SMTP pronto");
    }
});
}

async function testConnection() {
    try {
        const result = await pool.query("SELECT NOW()");
        console.log("Conectado ao banco!");
        console.log(result.rows[0]);
    } catch (error) {
        console.error("Erro ao conectar:", error.message);
    }
}
testandoSMTP();

testConnection();

export default pool;