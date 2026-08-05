import { json } from "express";
import pool from "../database/connection.js";

export async function existsUser(dados) {
    const result = await pool.query(
        " SELECT * FROM usuarios WHERE usuario = $1 or email = $2 ",
        [dados.usuario, dados.email]
    );

    console.log(result.rows);

    return result.rowCount;
}

export async function postUser(dados) {

    const result = await pool.query(
        " INSERT INTO usuarios(nome, usuario, email, senha, telefone) " +
        " VALUES ($1, $2, $3, $4, $5) RETURNING *",
        [dados.nome, dados.usuario, dados.email, dados.senha, dados.telefone]
    );

    return result.rows[0];

}

export async function getLogin(dados) {

    let result;
    if (dados.usuario.includes("@")) {
        result = await pool.query(
            " SELECT id,email, usuario, nome, telefone FROM usuarios WHERE email = $1 and senha = $2 ",
            [dados.usuario, dados.senha]
        );
    } else {
        result = await pool.query(
            " SELECT id,email, usuario, nome, telefone FROM usuarios WHERE usuario = $1 and senha = $2 ",
            [dados.usuario, dados.senha]
        );
    }
    console.log(result.rows);
    return result.rows[0];
}

export async function getUsuario(user) {
    const field = user.includes("@") ? "email" : "usuario";

    const result = await pool.query(
        `SELECT id, nome, email, usuario, telefone
         FROM usuarios
         WHERE ${field} = $1`,
        [user]
    );

    return result.rows;
}

export async function resetPassowrd(id, novaSenha) {
    const result = await pool.query(
        "UPDATE usuarios SET passoword = $2 WHERE id = $1 RETURNING *",
        [id, novaSenha]
    );

    return result.row[0];
}