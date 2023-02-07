const {Router} = require('express');

const userRouter = Router();

userRouter.post('/sign-up') // signUp
userRouter.post('/sign-in') // singIn
userRouter.get('/:userId') // getOne user


module.exports = userRouter;