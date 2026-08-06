import { rateLimit } from "express-rate-limit";

export const loginLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 5,
    message: {
        message: "Muitas tentativas de login. Tente novamente em 15 minutos."
    },
    standardHeaders: true,
    legacyHeaders: false
});

export const resetPasswordLimiter = rateLimit({
    windowMs: 10 * 60 * 1000,
    max: 3,
    message: {
        message: "Você solicitou muitos códigos de recuperação. Aguarde 10 minutos."
    }
});

export const apiLimiter = rateLimit({
    windowMs: 60 * 1000,
    max: 100,
    message: {
        message: "Limite de requisições excedido."
    }
});