import { json } from "express";
import pool from "../database/connection.js";

export async function getGenreAll({limit, offset, description}) {
    let sql = " SELECT * FROM genero ";
    const params = [];
    
    if (description) {
        params.push(`%${description}%`);

        sql += ` WHERE UPPPER(descricao) LIKE $${params.length}`;

    }

    params.push(limit);

    sql += ` ORDER BY id LIMIT $${params.length}`;

    params.push(offset);

    sql += ` OFFSET $${params.length}`;

    const result = await pool.query(sql, params);

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

export async function countGenre(description) {
    let sql = ` SELECT COUNT(*) AS count FROM genero `;
    const params = [];

    if (description) {
        params.push(`%${description}%`);

        sql += ` WHERE UPPPER(descricao) LIKE $${params.length}`;
    }

    const result = await pool.query(sql, params);

    return Number(result.rows[0].count);
}
