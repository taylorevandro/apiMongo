/**
 * @swagger
 * components:
 *   schemas:
 *     Genre:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *
 *         descricao:
 *           type: string
 *           example: "Terror"
 *
 *     GenreCreate:
 *       type: object
 *       required:
 *         - descricao
 *
 *       properties:
 *         descricao:
 *           type: string
 *           example: "A casa assombrada"
 *
 *     GenrePaginationResponse:
 *       allOf:
 *         - $ref: '#/components/schemas/Paginate'
 *
 *         - type: object
 *           properties:
 *             data:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Genre'
 */