import { Result } from "pg";
import * as UserModels from "../models/user.model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { sendEmail } from "../services/email.service.js";

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

        const senhaHash = await bcrypt.hash(novaSenha, 10);

        const existEmailOrUser = await UserModels.existsUser(req.body);
        console.log(existEmailOrUser);
        if (existEmailOrUser > 0) {
            return res.status(400).json({
                message: "Usuário ou E-mail já existente!"
            });
        }

        const userCadastrado = await UserModels.postUser(senhaHash, req.body);

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
        const { usuario, senha } = req.body;

        const login = await UserModels.getLogin(usuario);

        const senhaValida = await bcrypt.compare(
            senha,
            login.senha
        );

        if (!senhaValida) {
            return res.status(401).json({
                message: "Usuário ou senha inválidos"
            });
        }

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

        res.status(200).json({ acessToken: token });

    } catch (error) {
        res.status(500).json({
            message: "Erro ao validar login",
            error: error.message
        });
    }
}

export async function searchAccount(req, res) {
    try {
        const { email, telefone } = req.body;
        const login = await UserModels.findByEmailOrPhone(email, telefone);

        if (!login) {
            return res.status(404).json({
                message: "Usuário não encontrado"
            });
        }

        const code = Math.floor(
            100000 + Math.random() * 900000
        ).toString();

        const id = login.id;
        const email = login.email;

        const codeCreate = await UserModels.createCode({
            id_user: id,
            code,
            expire: new Date(Date.now() + 10 * 60 * 1000)
        });

        if (!codeCreate) {
            return res.status(404).json({
                message: "Erro ao criar código de validação"
            });
        }

        await sendEmail(
            email,
            "Código de recuperação",
            `Seu código é ${codeCreate.code}`
        );

        res.status(200).json({
            message: "Codigo enviado com sucesso"
        });

    } catch (error) {
        res.status(500).json({
            message: "Erro no processo de criação e envio do código",
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

        const senhaHash = await bcrypt.hash(novaSenha, 10);

        const login = await UserModels.resetPassword(id, senhaHash);

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

// export async function setPassowrd(req, res) {
//     try {
//         const usuario = await UserModels.findByEmailOrPhone(email, telefone);

//         if (!usuario) {
//             return res.status(404).json({
//                 message: "Usuário não encontrado"
//             });
//         }
//     } catch (error) {
//         res.status(500).json({
//             message: "Erro ao encontrar a conta do usuario informado",
//             error: error.message
//         });
//     }
// }