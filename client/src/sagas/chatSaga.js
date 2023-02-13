import {put} from 'redux-saga/effects';
import {addNewMessage, getUserChats} from '../api';
import {sendNewMessageSuccess, sendNewMessageError, getUserChatsSuccess, getUserChatsError} from '../actions/actionCreators';

export function* createMessageSaga(action) {
    try {
       const {data: {data}} = yield addNewMessage(action.data);
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