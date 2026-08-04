import express from "express";
import movies from "./movie.route.js";
import genres from "./genre.router.js";
import users from "./user.route.js";
import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "../document/swagger.js";

const routes = (app) => {
    app.route("/")
        .get((req, res) => res.status(200).send(
            'Servidor movie'
        ));
    app.use(express.json(), movies);
    app.use(express.json(), genres);
    app.use(express.json(), users);
    app.use(
        "/api-docs",
        swaggerUi.serve,
        swaggerUi.setup(swaggerSpec)
    );
};

export default routes;