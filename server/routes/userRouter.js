const {Router} = require('express');
const {hashPass} = require('../middleware/hashPassword');
const UserController = require('../controllers/user.controller');
const userRouter = Router();

userRouter.post('/sign-up', hashPass, UserController.signUpUser) // signUp
userRouter.post('/sign-in', UserController.signInUser) // singIn
userRouter.get('/:userId', UserController.getOneUser) // getOne user


module.exports = userRouter;