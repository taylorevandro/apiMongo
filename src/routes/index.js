import express from "express";
import movies from "./movie.route.js";
import genres from "./genre.router.js";

const routes = (app) => {
    app.route("/")
        .get((req, res) => res.status(200).send(
            'Servidor movie'
        ));
    app.use(express.json(), movies);
    app.use(express.json(), genres);
};

export default routes;