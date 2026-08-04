import { buildPagination } from '../services/pagination.service.js';
import * as GenreModels from '../models/genre.model.js';

export async function genreAll(req, res) {
    try {
        const description = req.query.descricao.toUpperCase();

        const result = await buildPagination(req,
            (limit, offset) => GenreModels.getGenreAll({ limit, offset, description: req.query.descricao}),
            () => GenreModels.countGenre(description)
        );

        res.status(200).json(result);

    } catch (error) {
        res.status(400).json({
            message: "Erro ao consultar os gêneros",
            error: error.message
        });

    }
}

export async function searchGenre(req, res) {
    try {
        const id = req.params.id;
        const Genre = await GenreModels.getGenreID(id);

        res.status(200).json(Genre);
    } catch (error) {
        res.status(400).json({
            message: "Erro ao consultar o gênero",
            error: error.message
        });

    }
}

export async function addGenre(req, res) {
    try {
        const descricao = req.body;
        if (!descricao) {
            return res.status(400).json({
                message: "O campo descricao é obrigatório."
            });
        }

        const Genre = await GenreModels.postGenre(req.body);

        res.status(201).json(Genre);
    } catch (error) {
        res.status(400).json({
            message: "Erro ao consultar os gêneros",
            error: error.message
        });

    }
}

export async function modifyGenre(req, res) {
    try {
        const id = req.params.id;
        const { descricao } = req.body;
        if (!descricao) {
            return res.status(400).json({
                message: "O campo descricao é obrigatório."
            });
        }
        const Genre = await GenreModels.updateGenre(id, req.body);

        res.status(200).json(Genre);
    } catch (error) {
        res.status(400).json({
            message: "Erro ao consultar os gêneros",
            error: error.message
        });

    }
}
