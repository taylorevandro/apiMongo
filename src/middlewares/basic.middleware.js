import { Buffer } from "node:buffer";

export function basicAuth(req, res, next) {

    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({
            message: "Authorization não informado"
        });
    }

    const [type, credentials] = authHeader.split(" ");

    if (type !== "Basic") {
        return res.status(401).json({
            message: "Tipo de autenticação inválido"
        });
    }

    const decoded = Buffer
        .from(credentials, "base64")
        .toString("utf8");

    const [user, password] = decoded.split(":");

    if (user !== process.env.BASIC_USER|| password !== process.env.BASIC_PASSWORD) {
        return res.status(401).json({
            message: "Usuário ou senha inválidos"
        });
    }

    next();
}