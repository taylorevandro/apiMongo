import swaggerJsdoc from "swagger-jsdoc";

const options = {

    definition: {
        openapi: "3.0.0",

        info: {
            title: "API MongoMovie",
            version: "1.0.0",
            description: "API para gerenciamento de avaliaçoes de filmes"
        },

        servers: [
            {
                url: "https://apimongo-dste.onrender.com",
                description: "Servidor de produção"
            },
            {
                url: "http://localhost:3000",
                description: "Servidor local"
            }
        ],

        components: {
            securitySchemes: {
                bearerAuth: {
                    type: "http",
                    scheme: "bearer",
                    bearerFormat: "JWT"
                }
            }
        }

    },

    apis: [
        "./src/docs/*.js"
    ]

};


export const swaggerSpec = swaggerJsdoc(options);