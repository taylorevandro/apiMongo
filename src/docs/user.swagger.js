/**
 * @swagger
 * tags:
 *   name: Usuarios
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
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *                 example: 1
 *               novaSenha:
 *                 type: string
 *                 example: ******
 *
 *     responses:
 *       200:
 *         description: Senha alterada com sucesso
 *
 *       404:
 *         description: Usuário não encontrado
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
 *                 example: *******
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
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               usuario:
 *                 type: string
 *                 example: joaobatista ou joao@gmail.com
 *               senha:
 *                 type: string
 *                 example: *******
 *
 *     responses:
 *       200:
 *         description: Login realizado com sucesso
 */


/**
 * @swagger
 * /usuario/:user:
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
 *         schema:
 *           type: string
 *
 *     responses:
 *       200:
 *         description: Usuário encontrado
 */

