const {Router} = require('express');
const {checkToken} = require('../middleware/checkToken');

const ChatController = require('../controllers/chat.controller');
const chatRouter = Router();

chatRouter.post('/', ChatController.createChat);
chatRouter.post('/:chatId', ChatController.addNewMessage);
chatRouter.get('/:chatId', checkToken, ChatController.getChatWithMessages);
chatRouter.get('/user/:userId', ChatController.getAllUserChats);
chatRouter.put('/:chatId', ChatController.addUserToChat);

module.exports = chatRouter;
