/**
 * @swagger
 * tags:
 *   name: Filmes
 *   description: Endpoints de gerenciamento de Filmes
 */

/**
 * @swagger
 * /filmes:
 *   get:
 *     summary: Lista todos os gêneros
 *     tags:
 *       - Filmes
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
 *         description: Filtra Filme pela descrição
 *
 *     responses:
 *       200:
 *         description: Lista paginada de Filmes
 *
 */

/**
 * @swagger
 * /filmes/{id}:
 *   get:
 *     summary: Busca um Filme pelo ID
 *     tags:
 *       - Filmes
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
 *         description: Filme encontrado
 *
 *       404:
 *         description: Filme não encontrado
 */

/**
 * @swagger
 * /filmes:
 *   post:
 *     summary: Cria um novo Filme
 *     tags:
 *       - Filme
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
 *               descricao:
 *                 type: string
 *                 example: Aventura
 *               ano_lancamento:
 *                 type: integer
 *                 example: 1
 *               id_genero:
 *                 type: integer
 *                 example: 1
 *               duracao:
 *                 type: integer
 *                 example: 1
 *               autor:
 *                 type: string
 *                 example: Sergio
 *
 *     responses:
 *       201:
 *         description: Filme criado com sucesso
 */

/**
 * @swagger
 * /filmes/{id}:
 *   put:
 *     summary: Atualiza um filme
 *     tags:
 *       - Filme
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
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               descricao:
 *                 type: string
 *                 example: Aventura
 *               ano_lancamento:
 *                 type: integer
 *                 example: 1
 *               id_genero:
 *                 type: integer
 *                 example: 1
 *               duracao:
 *                 type: integer
 *                 example: 1
 *               autor:
 *                 type: string
 *                 example: Sergio
 *
 *     responses:
 *       200:
 *         description: Gênero atualizado
 */


/**
 * @swagger
 * /filmes/{id}:
 *   delete:
 *     summary: deletar um filme
 *     tags:
 *       - Filme
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
 *     responses:
 *       200:
 *         description: Filme deletado com sucesso
 */

