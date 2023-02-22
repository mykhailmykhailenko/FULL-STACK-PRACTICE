import {put} from 'redux-saga/effects';
import { signIn, signUp, getUserData } from '../api';
import history from '../browserHistory';
import {logingUserSuccess, logingUserError,getUserDataSuccess, getUserDataError, registerUserSuccess, registerUserError} from '../actions/actionCreators';

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
        yield put(registerUserSuccess(data));
        history.push('/messenger');
    } catch(error) {
        yield put(registerUserError(error));
    }
}

export function* getUserDataSaga(action) {
    try {
        const {data: {data}} = yield getUserData();
        yield put(getUserDataSuccess(data));
    } catch(error) {
        yield put(getUserDataError(error));
    }
}