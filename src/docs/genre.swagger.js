/**
 * @swagger
 * tags:
 *   name: Gêneros
 *   description: Endpoints de gerenciamento de gêneros
 */

/**
 * @swagger
 * /generos:
 *   get:
 *     summary: Lista todos os gêneros
 *     tags:
 *       - Gêneros
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           example: 1
 *         description: Página atual
 *
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           example: 10
 *         description: Quantidade de registros por página
 *
 *       - in: query
 *         name: descricao
 *         schema:
 *           type: string
 *           example: Terror
 *         description: Filtra gênero pela descrição
 *
 *     responses:
 *       200:
 *         description: Lista paginada de gêneros
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/GenrePaginationResponse'
 *
 */

/**
 * @swagger
 * /genero/{id}:
 *   get:
 *     summary: Busca um gênero pelo ID
 *     tags:
 *       - Gêneros
 *     security:
 *       - bearerAuth: []
 *
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           example: 1
 *
 *     responses:
 *       200:
 *         description: Gênero encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Genre'
 *
 *       404:
 *         description: Gênero não encontrado
 */

/**
 * @swagger
 * /genero:
 *   post:
 *     summary: Cria um novo gênero
 *     tags:
 *       - Gêneros
 *     security:
 *       - bearerAuth: []
 *
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/GenreCreate'
 *
 *     responses:
 *       201:
 *         description: Gênero criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Genre'
 */

/**
 * @swagger
 * /genero/{id}:
 *   put:
 *     summary: Atualiza um gênero
 *     tags:
 *       - Gêneros
 *     security:
 *       - bearerAuth: []
 *
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/GenreCreate'
 *
 *     responses:
 *       200:
 *         description: Gênero atualizado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Genre'
 */