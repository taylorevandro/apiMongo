/**
 * @swagger
 * components:
 *   schemas:
 *
 *     User:
 *       type: object
 *       required:
 *         - nome
 *         - usuario
 *         - email
 *         - telefone
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *           description: Identificador do usuário
 *
 *         nome:
 *           type: string
 *           example: João Batista
 *
 *         usuario:
 *           type: string
 *           example: joaobatista
 *
 *         email:
 *           type: string
 *           format: email
 *           example: joao@email.com
 *
 *         telefone:
 *           type: string
 *           example: "91999999999"
 *
 *     UserCreate:
 *       type: object
 *       required:
 *         - nome
 *         - usuario
 *         - email
 *         - senha
 *         - telefone
 *       properties:
 *         nome:
 *           type: string
 *           example: João Batista
 *
 *         usuario:
 *           type: string
 *           example: joaobatista
 *
 *         email:
 *           type: string
 *           format: email
 *           example: joao@email.com
 *
 *         senha:
 *           type: string
 *           format: password
 *           example: "Senha@123"
 *
 *         telefone:
 *           type: string
 *           example: "91999999999"
 *
 *     Login:
 *       type: object
 *       properties:
 *         usuario:
 *           type: string
 *           description: Usuário ou e-mail
 *           example: joaobatista
 *
 *         senha:
 *           type: string
 *           format: password
 *           example: "Senha@123"
 *
 *     ResetPassword:
 *       type: object
 *       required:
 *         - id
 *         - novaSenha
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *
 *         novaSenha:
 *           type: string
 *           format: password
 *           example: "NovaSenha@123"
 *
 *     LoginResponse:
 *       type: object
 *       properties:
 *         usuario:
 *           type: string
 *           example: joaobatista
 *
 *         nome:
 *           type: string
 *           example: João Batista
 *
 *         token:
 *           type: string
 *           description: Token JWT
 *           example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
 */