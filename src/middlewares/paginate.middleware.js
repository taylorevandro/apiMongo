export function paginate(req,res,next){

    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;

    req.pagination = {
        limit,
        offset:(page - 1) * limit,
        page
    };

    next();

}