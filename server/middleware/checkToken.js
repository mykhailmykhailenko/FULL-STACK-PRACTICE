const TokenError = require('../errors/TokenError');
const {verifyToken} = require('../services/tokenService');

module.exports.checkToken = async (req, res, next) => {
    try {
        const {headers: {authorization}} = req;
        if (!authorization) {
            throw new TokenError('Need authorization');
        }
        const [, token] = authorization.split(' ');
        const payload = await verifyToken(token);
        console.log(payload);
    } catch(error) {
        next(error);
    }
}