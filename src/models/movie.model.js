import { json } from "express";
import pool from "../database/connection.js";

export async function getMovies() {
    const result = await pool.query(
        "SELECT * FROM filmes ORDER BY id"
    );

    return result.rows;
}

export async function getMovie(id) {
    const result = await pool.query(
        " SELECT * FROM filmes WHERE id = $1 ",
        [id]);


    return result.rows;
}

export async function updateMovie(id, data) {
    const field = [];
    const value = [];

    if (data.descricao !== undefined) {
        field.push(`descricao = $${value.length + 1}`);
        value.push(data.descricao);
    }

    if (data.duracao !== undefined) {
        field.push(`duracao = $${value.length + 1}`);
        value.push(data.duracao);
    }

    if (data.ano_lancamento !== undefined) {
        field.push(`ano_lancamento = $${value.length + 1}`);
        value.push(data.ano_lancamento);
    }

    if (data.genero !== undefined) {
        field.push(`id_genero = $${value.length + 1}`);
        value.push(data.genero);
    }

    if (data.autor !== undefined) {
        field.push(`autor = $${value.length + 1}`);
        value.push(data.autor);
    }

    if (field.length === 0) {
        return null;
    }

    value.push(id);

    const result = await pool.query(
        `UPDATE filmes
         SET ${field.join(", ")}
         WHERE id = $${value.length}
         RETURNING *`,
        value
    );

    return result.rows[0];
}

export async function postMovie(data) {
    const result = await pool.query(
        " INSERT INTO filmes (descricao, id_genero, duracao, ano_lancamento, autor) " +
        " VALUES ($1,$2, $3, $4, $5) RETURNING * ",
        [data.descricao, data.genero, data.ano_lancamento, data.duracao, data.autor]);

    return result.rows[0];
}

export async function deleteMovie(id) {
    const result = await pool.query(
        " DELETE FROM filmes WHERE id = $1 RETURNING *",
        [id]);

    return result.rows[0];
}



