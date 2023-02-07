const NotFoundError = require('./errors');


module.exports.errorHandler = async (err, req, res, next) => {
    if (err instanceof NotFoundError) {
        return res.status(404).send({error: err.message});
    }

    res.status(500).send({error: err.message});
}