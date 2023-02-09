const TokenError = require('../errors/TokenError');
const {verifyAccessToken} = require('../services/tokenService');

module.exports.checkToken = async (req, res, next) => {
    try {
        const {headers: {authorization}} = req;
        if (!authorization) {
            throw new TokenError('Need authorization');
        }
        const [, token] = authorization.split(' ');
        req.payload = await verifyAccessToken(token);
        console.log(req.payload);
        next();
    } catch(error) {
        next(error);
    }
}