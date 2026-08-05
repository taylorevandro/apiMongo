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
 *               $ref: '#/components/schemas/Error400'
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
 * /usuario/{user}:
 *   get:
 *     summary: Busca usuário através do campo usuário ou email
 *     tags:
 *       - Usuários
 *     security:
 *       - bearerAuth: []
 *
 *     parameters:
 *       - in: path
 *         name: user
 *         required: true
 *         description: Nome de usuário ou e-mail
 *         schema:
 *           type: string
 *
 *     responses:
 *       200:
 *         description: Usuário encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 */

