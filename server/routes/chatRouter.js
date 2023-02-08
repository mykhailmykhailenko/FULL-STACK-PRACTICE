const {Router} = require('express');

const ChatController = require('../controllers/chat.controller');
const chatRouter = Router();

chatRouter.post('/', ChatController.createChat);
chatRouter.post('/:chatId', ChatController.addNewMessage);
chatRouter.get('/:chatId', ChatController.getChatWithMessages);
chatRouter.get('/user/:userId', ChatController.getAllUserChats);

module.exports = chatRouter;
