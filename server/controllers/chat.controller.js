const { Chat, Message } = require("../models");


module.exports.createChat = async (req, res, next) => {
    try {
        const {body} = req;
        const newChat = await Chat.create(body);
        res.status(201).send({data: newChat});
    } catch(error) {
        next(error);
    }
}

module.exports.addUserToChat = async (req, res, next) => {}

module.exports.addNewMessage = async (req, res, next) => {
    try {
        const {body, params: {chatId}} = req;
        const chatInstance = await Chat.findById(chatId);
        const newMessage = await Message.create({...body, chatId});
        chatInstance.messages.push(newMessage);
        chatInstance.save();
        console.log(chatInstance);
        res.status(201).send({data: newMessage});
    } catch(error) {
        next(error);
    }
}


module.exports.getAllUserChats = async (req, res, next) => {
    try {
        const {params: {userId}} = req;
        const usersChat = await Chat.find({
            members: userId
        });
        res.status(200).send({data: usersChat })
    } catch(error) {
        next(error)
    }
}

module.exports.getChatWithMessages = async (req, res, next) => {
    try {
        const {params: {chatId}} = req;
        const chatWithMessages = await Chat.findById(chatId).populate('messages');
        res.status(200).send(chatWithMessages);
    } catch(error) {
        next(error)
    }
}
