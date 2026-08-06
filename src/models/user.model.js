import { json } from "express";
import pool from "../database/connection.js";
import nodemailer from "nodemailer";

export async function existsUser(dados) {
    const result = await pool.query(
        " SELECT * FROM usuarios WHERE usuario = $1 or email = $2 ",
        [dados.usuario, dados.email]
    );

    console.log(result.rows);

    return result.rowCount;
}

export async function postUser(senhaHash, dados) {

    const result = await pool.query(
        " INSERT INTO usuarios(nome, usuario, email, senha, telefone) " +
        " VALUES ($1, $2, $3, $4, $5) RETURNING *",
        [dados.nome, dados.usuario, dados.email, senhaHash, dados.telefone]
    );

    return result.rows[0];

}

export async function getLogin(usuario) {

    let result;

    if (usuario.includes("@")) {
        result = await pool.query(
            " SELECT * FROM usuarios WHERE email = $1 ",
            [usuario]
        );
    } else {
        result = await pool.query(
            " SELECT * FROM usuarios WHERE usuario = $1 ",
            [usuario]
        );
    }
    console.log(result.rows);
    return result.rows[0];
}

export async function findByEmailOrPhone(email, telefone) {
    // const field = user.includes("@") ? "email" : "telefone";
    const info = email || telefone;

    const result = await pool.query(
        `SELECT id, nome, email, usuario, telefone
         FROM usuarios WHERE email = $1 OR telefone = $1 `,
        //  WHERE ${field} = $1`,
        [info]
    );

    return result.rows[0];
}

export async function resetPassword(id, novaSenha) {
    const result = await pool.query(
        "UPDATE usuarios SET senha = $2 WHERE id = $1 RETURNING *",
        [id, novaSenha]
    );

    return result.rows[0];
}

export async function createCode({ id_user, code, expire }) {
    const result = await pool.query(
        "INSERT INTO recuperacao_senha(id_usuario, codigo, expiracao) VALUES ($1, $2, $3)  RETURNING *",
        [id_user, code, expire]
    );

    return result.rows[0];

}

export async function findyCode(id, codigo) {
    const result = await pool.query(
        `SELECT * `
            `FROM recuperacao_senha `
            `WHERE id_usuario = $1 `
            `AND codigo = $2 `
            `AND expiracao > NOW() `
            `ORDER BY ID`,
        [id, codigo]);
    
    return result.rows[0];
}

