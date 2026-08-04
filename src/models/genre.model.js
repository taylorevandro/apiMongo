import { json } from "express";
import Pool from "../database/connection.js";
import pool from "../database/connection.js";

export async function getGenreAll({limit, offset}) {

    const result = await pool.query(" SELECT * FROM genero ORDER BY id LIMIT $1 OFFSET $2", [limit, offset]);

    return result.rows;
}

export async function getGenreID(id) {
    const result = await pool.query(
        "SELECT * FROM genero WHERE id = $1", [id]
    );
    console.log(result.rowCount);


    return result.rows;

}

export async function postGenre(dados) {
    const result = await pool.query(
        "INSERT INTO genero (descricao) VALUES ($1) RETURNING *", [dados.descricao]
    );

    return result.rows[0];
}

export async function updateGenre(id, dados) {

    const result = await pool.query(
        "UPDATE genero SET descricao = $2 WHERE id = $1 RETURNING *",
        [id, dados.descricao]
    )

    return result.rows[0];
}

export async function countGenre() {

    const result = await pool.query(
        `
        SELECT COUNT(*) 
        FROM genero
        `
    );

    return Number(result.rows[0].count);
}
