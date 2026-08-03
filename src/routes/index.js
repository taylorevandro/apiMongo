import express from "express";
import movies from "./movie.route.js";

const routes = (app) => {
    app.route("/")
        .get((req, res) => res.status(200).send(
            'Servidor movie'
        ));
    app.use(express.json(), movies);
};

export default routes;