import {call, put, takeLatest} from 'redux-saga/effects'
import {User} from "../../entity/entities";
import {TeacherActionTypes} from "./teacher.action";
import {userService} from "../../service/user.service";

function* getTeachers(action: any) {
    try {
        const teachers: User[] = yield call(userService.getTeachers);
        yield put({type: TeacherActionTypes.SET_TEACHERS, payload: teachers});
    } catch (e) {
        console.error(e);
    }
}

function* createTeacher(action: any) {
    try {
        const teacher: User = yield call(userService.addTeacher, action.payload);
        yield put({type: TeacherActionTypes.GET_TEACHERS_REQUEST});
    } catch (e) {
        console.error(e);
    }
}

function* TeacherSaga() {
    yield takeLatest(TeacherActionTypes.GET_TEACHERS_REQUEST, getTeachers);
    yield takeLatest(TeacherActionTypes.CREATE_TEACHER_REQUEST, createTeacher);
}

export default TeacherSaga;
