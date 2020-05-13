import {call, put, takeLatest} from 'redux-saga/effects'
import {User} from "../../entity/entities";
import {UserActionTypes} from "./user.action";
import {userService} from "../../service/user.service";
import {push} from "connected-react-router";

function* getUser(action: any) {
    try {
        const user: User = yield call(userService.logIn, action.payload.mail, action.payload.pass);
        yield put({type: UserActionTypes.SET_USER, payload: user});
        yield put(push('/home'));
    } catch (e) {
        console.error(e);
    }
}

function* deleteUser(action: any) {
    try {
        const user: User = yield call(userService.deleteUser, action.payload);
    } catch (e) {
        console.error(e);
    }
}

function* UserSaga() {
    yield takeLatest(UserActionTypes.GET_USER_REQUEST, getUser);
    yield takeLatest(UserActionTypes.DELETE_USER_REQUEST, deleteUser);
}

export default UserSaga;
