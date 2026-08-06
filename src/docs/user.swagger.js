/**
 * @swagger
 * tags:
 *   name: Usuários
 *   description: Endpoints de gerenciamento de Usuarios
 */

/**
 * @swagger
 * /usuario/resetlogin:
 *   put:
 *     summary: Redefinir a senha do usuário
 *     tags:
 *       - Usuários
 *     security:
 *       - bearerAuth: []
 *
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ResetPassword'
 *
 *     responses:
 *       200:
 *         description: Senha alterada com sucesso
 *
 *       400:
 *         description: Usuário não encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Message'
 *       500:
 *         description: Usuário não encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error500'
 */

/**
 * @swagger
 * /usuario/cadastro:
 *   post:
 *     summary: Cria um novo usuário
 *     tags:
 *       - Usuários
 *     security:
 *       - bearerAuth: []
 *
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *                 example: João
 *               usuario:
 *                 type: string
 *                 example: joaobatista
 *               email:
 *                 type: string
 *                 example: joaobatista@email.com
 *               senha:
 *                 type: string
 *                 example: senha123
 *               telefone:
 *                 type: string
 *                 example: 91999982378
 *
 *     responses:
 *       201:
 *         description: Usuário criado com sucesso
 */

/**
 * @swagger
 * /usuario/login:
 *   post:
 *     summary: login
 *     tags:
 *       - Usuários
 *     security:
 *       - basicAuth: []
 *     requestBody:
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Login'
 *
 *     responses:
 *       200:
 *         description: Login realizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/LoginResponse'
 *
 */


/**
 * @swagger
 * /usuario/reset:
 *   post:
 *     summary: Busca usuário através do campo usuário ou email e envia código de validação para alterar senha
 *     tags:
 *       - Usuários
 *     security:
 *       - bearerAuth: []
 *
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Reset'
 *
 *     responses:
 *       200:
 *         description: Código enviado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Message'
 */

/**
 * @swagger
 * /usuario/validaCodigo:
 *   post:
 *     summary: Valida o código enviado por email ou telefone
 *     tags:
 *       - Usuários
 *     security:
 *       - bearerAuth: []
 *
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ValidaCode'
 *
 *     responses:
 *       200:
 *         description: Codigo validado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Message'
 */

