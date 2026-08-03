import * as  FilmeModels from "../models/movie.model.js";

export async function movieAll(req, res) {
    try {
        const movies = await FilmeModels.getMovies();

        res.json(movies);

    } catch (error) {
        res.status(500).json({
            message: "Erro ao buscar os filmes",
            error: error.message
        });
    }
}

export async function searchMovie(req, res) {
    try {
        const id = req.params.id;
        const movie = await FilmeModels.getMovie(id);

        if (!movie) {
            return res.status(404).json({
                message: "filme não encontrado"
            })
        }

        res.json(movie);

    } catch (error) {
        res.status(500).json({
            message: "Erro ao buscar o filme",
            error: error.message
        });
    }
}

export async function addMovie(req, res) {
    try {
        const { descricao, genero, duracao, ano_lancamento } = req.body;
        if (!descricao) {
            return res.status(400).json({
                message: "O campo descricao é obrigatório."
            });
        }
        if (!genero) {
            return res.status(400).json({
                message: "O campo genero é obrigatório."
            });
        }
        if (!duracao) {
            return res.status(400).json({
                message: "O campo duracao é obrigatório."
            });
        }
        if (!ano_lancamento) {
            return res.status(400).json({
                message: "O campo ano_lancamento é obrigatório."
            });
        }
        const movie = await FilmeModels.postMovie(req.body);

        res.status(201).json(movie);

    } catch (error) {
        res.status(500).json({
            message: "Erro ao cadastrar filme",
            error: error.message
        });
    }

}

export async function modifyMovie(req, res) {

    try {
        const id = req.params.id;
        const movie = await FilmeModels.updateMovie(id, req.body);

        res.status(200).json(movie);

    } catch (error) {
        res.status(500).json({
            message: "Erro ao atualizar o filme",
            error: error.message
        });
    }

}

export async function removeMovie(req, res) {

    try {
        const id = req.params.id;
        const movie = await FilmeModels.deleteMovie(id);

        if (!movie) {
            return res.status(404).json({ "message": "filme não encontrado" });
        }

        res.status(200).json({ "message": "filme deletado com sucesso" });


    } catch (error) {
        res.status(500).json({
            message: "Erro ao remover o filme",
            error: error.message
        });
    }

}