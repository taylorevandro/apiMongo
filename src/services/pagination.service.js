export async function buildPagination(req, getData, getTotal) {

    const { page, limit, offset } = req.pagination;

    const [data, total] = await Promise.all([
        getData(limit, offset),
        getTotal()
    ]);

    return {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
        hasNextPage: page < Math.ceil(total / limit),
        hasPreviousPage: page > 1,
        data
    };
}