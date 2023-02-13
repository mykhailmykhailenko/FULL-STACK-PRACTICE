import {takeLatest} from 'redux-saga/effects';
import ACTION_TYPES from '../actions/actionTypes';
import {createMessageSaga, getUserChatsSaga} from './chatSaga';
import {loginUserSaga, registerUserSaga} from './userSaga';

function* rootSaga() {
   ////
   yield takeLatest(ACTION_TYPES.LOGIN_USER_REQUEST, loginUserSaga);
   yield takeLatest(ACTION_TYPES.REGISTER_USER_REQUEST, registerUserSaga);
   ////
   yield takeLatest(ACTION_TYPES.SEND_NEW_MESSAGE_REQUEST, createMessageSaga);
   yield takeLatest(ACTION_TYPES.GET_USER_CHATS_REQUEST, getUserChatsSaga);
}

export default rootSaga