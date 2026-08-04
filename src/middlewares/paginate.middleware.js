export function paginate(req,res,next){

    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;

    if (page < 1)
        page = 1;

    if (limit < 1)
        limit = 10;

    if (limit > 100)
        limit = 100;

    req.pagination = {
        limit,
        offset:(page - 1) * limit,
        page
    };

    next();

}