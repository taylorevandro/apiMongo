import { Result } from "pg";
import * as UserModels from "../models/user.model.js";
import jwt from "jsonwebtoken";

export async function addUser(req, res) {
    try {
        const { nome, usuario, email, senha } = req.body;
        if (!nome) {
            return res.status(400).json({
                message: "O campo nome é obrigatório!"
            });
        }

        if (!usuario) {
            return res.status(400).json({
                message: "O campo usuario é obrigatório!"
            });
        }

        if (!email) {
            return res.status(400).json({
                message: "O campo email é obrigatório!"
            });
        }

        if (!senha) {
            return res.status(400).json({
                message: "O campo senha é obrigatório!"
            });
        }

        const existEmailOrUser = await UserModels.existsUser(req.body);
        console.log(existEmailOrUser);
        if (existEmailOrUser > 0) {
            return res.status(400).json({
                message: "Usuário ou E-mail já existente!"
            });
        }

        const userCadastrado = await UserModels.postUser(req.body);

        res.status(200).json(userCadastrado);

    } catch (error) {
        res.status(500).json({
            message: "Erro ao criar novo usuário",
            error: error.message
        });
    }
}

export async function login(req, res) {
    try {
        const login = await UserModels.getLogin(req.body);
        
        if (!login) {
            return res.status(401).json({
                message: "Usuário ou senha inválidos"
            });
        }

        const token = jwt.sign({
            id: login.usuario,
            nome: login.nome,
            email: login.email,
            telefone: login.telefone
        },
            process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRES
        });

        res.status(200).json({acessToken: token});

    } catch (error) {
        res.status(500).json({
            message: "Erro ao validar login",
            error: error.message
        });
    }
}

export async function searchAccount(req, res) {
    try {
        const user = req.params.user;
        const login = await UserModels.getUsuario(req.user);

        res.status(200).json(login);

    } catch (error) {
        res.status(500).json({
            message: "Erro ao encontrar conta usuario",
            error: error.message
        });
    }
}

export async function setPassowrd(req, res) {
    try {
        const { id, novaSenha } = req.body;

        if (!id) {
            return res.status(400).json({
                message: "O campo id é obrigatório"
            });
        }

        if (!novaSenha) {
            return res.status(400).json({
                message: "O campo novaSenha é obrigatório"
            });
        }

        const login = await UserModels.resetPassowrd(id, novaSenha);

        res.status(200).json({
            message: "Senha alterada com sucesso"
        });
    } catch (error) {
        res.status(500).json({
            message: "Erro ao resetar senha do login",
            error: error.message
        });
    }

}