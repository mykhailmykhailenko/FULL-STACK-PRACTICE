import {put} from 'redux-saga/effects';
import { signIn, signUp } from '../api';
import history from '../browserHistory';
import {logingUserSuccess, logingUserError} from '../actions/actionCreators';

export function* loginUserSaga(action) {
    try {
        const {data: {data}} = yield signIn(action.payload);
        yield put(logingUserSuccess(data));
        history.push('/messenger');
    } catch(error) {
        yield put(logingUserError(error));
    }
}

export function* registerUserSaga(action) {
    try {
        const {data: {data}} = yield signUp(action.payload);
        yield put(logingUserSuccess(data));
        history.push('/messenger');
    } catch(error) {
        yield put(logingUserError(error));
    }
}