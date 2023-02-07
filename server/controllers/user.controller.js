const {User} = require('../models');


module.exports.signUpUser = async (req, res, next) => {
    try {
        const {body, passwordHash} = req;
        const createdUser = await User.create({...body, passwordHash});
        res.status(201).send(createdUser);
    } catch(error) {
        next(error);
    }
}

module.exports.signInUser = async (req, res, next) => {

}

module.exports.getOneUser = async (req, res, next) => {

}