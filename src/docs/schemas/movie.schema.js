/**
 * @swagger
 * components:
 *   schemas:
 *
 *     moviePaginateresponse:
 *       type: object
 *       properties:
 *         $ref: '#/components/schemas/paginate'
 *         data:
 *           type: array
 *           items:
 *              type: object
 *              properties:
 *                id:
 *                  type: integer
 *                  example: 1
 *                descricao:
 *                  type: string
 *                  example: A casa assombrada
 *                descricao:
 *                  type: string
 *                  example: Aventura
 *                ano_lancamento:
 *                  type: integer
 *                  example: 1
 *                id_genero:
 *                  type: integer
 *                  example: 1
 *                duracao:
 *                  type: integer
 *                  example: 1
 *                autor:
 *                  type: string
 *                  example: Sergio
 * 
 *     movieresponse
 *       type: object
 *       properties:
 *          id:
 *            type: integer
 *            example: 1
 *          descricao:
 *            type: string
 *            example: A casa assombrada
 *          ano_lancamento:
 *            type: integer
 *            example: 1
 *          id_genero:
 *            type: integer
 *            example: 1
 *          duracao:
 *             type: integer
 *             example: 1
 *          autor:
 *             type: string
 *             example: Sergio
 * 
 *     MovieCreate:
 *       type: object
 *       required:
 *         - descricao
 *         - ano_lancamento
 *         - id_genero
 *         - duracao
 *         - autor
 *       properties:
 *          descricao:
 *             type: string
 *             example: Aventura
 *          ano_lancamento:
 *            type: integer
 *            example: 1
 *          id_genero:
 *             type: integer
 *             example: 1
 *          duracao:
 *             type: integer
 *             example: 1
 *          autor:
 *             type: string
 *             example: Sergio
 */