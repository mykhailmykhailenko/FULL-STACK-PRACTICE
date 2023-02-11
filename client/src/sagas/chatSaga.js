import {put} from 'redux-saga/effects';
import {addNewMessage} from '../api';
import {sendNewMessageSuccess} from '../actions/actionCreators';

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
