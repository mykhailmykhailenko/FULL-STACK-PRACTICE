import {put} from 'redux-saga/effects';
import {addNewMessage, getUserChats, getChatWithMessages} from '../api';
import {getChatWithMessagesError, getChatWithMessagesSuccess, sendNewMessageSuccess, sendNewMessageError, getUserChatsSuccess, getUserChatsError} from '../actions/actionCreators';

export function* createMessageSaga(action) {
    try {
       const {data: {data}} = yield addNewMessage(action.payload);
       // По результату запиту - створити action з відповідю сервера і донести його до редьюсера 
       yield put(sendNewMessageSuccess(data));
    } catch(error) {
        // Якщо сталася помилка - ми маємо зробити новий action з помилкою і донести його до редьюсера
        yield put(sendNewMessageError(error));
    }
}
export function* getUserChatsSaga(action) {
    try {
       const {data: {data}} = yield getUserChats(); 
       yield put(getUserChatsSuccess(data));
    } catch(error) {
        yield put(getUserChatsError(error));
    }
}


export function* getChatSaga(action) {
    try {
       const {data: {data}} = yield getChatWithMessages(action.payload); 
       yield put(getChatWithMessagesSuccess(data));
    } catch(error) {
        yield put(getChatWithMessagesError(error));
    }
}