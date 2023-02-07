const {User} = require('../models');
const NotFoundError = require('../errors/NotFound');

module.exports.signUpUser = async (req, res, next) => {
    try {
        const {body, passwordHash} = req;
        const createdUser = await User.create({...body, passwordHash});
        res.status(201).send(createdUser);
    } catch(error) {
        next(error);
    }
}


/*
{
    email: 'mail@mks.a',
    password: 'password'
}
1. Знайти юзера за таким мейлом.
    Якщо такого мейла ні в кого немає - відповісти помилкою.
2. Порівняти хеш паролів.
3. Якщо все співпадає - відправити користувачу його дані.
*/

module.exports.signInUser = async (req, res, next) => {
    try {
        const {body: {email, password}} = req;
        const foundUser = await User.findOne({
                email: email
        });
        if (foundUser) {
            /// порівняння паролів
        } else {
            throw new NotFoundError('User not found');
        }
    } catch(error) {
        next(error)
    }
}

module.exports.getOneUser = async (req, res, next) => {
}