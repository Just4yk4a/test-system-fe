import {call, put, takeLatest} from 'redux-saga/effects'
import {User} from "../../entity/entities";
import {StudentActionTypes} from "./student.action";
import {userService} from "../../service/user.service";

function* getStudents(action: any) {
    try {
        const student: User[] = yield call(userService.getStudents);
        yield put({type: StudentActionTypes.SET_STUDENTS, payload: student});
    } catch (e) {
        console.error(e);
    }
}

function* saveStudent(action: any) {
    try {
        const teacher: User = yield call(userService.addStudent, action.payload);
        yield put({type:StudentActionTypes.GET_STUDENTS_REQUEST});
    } catch (e) {
        console.error(e);
    }
}

function* StudentSaga() {
    yield takeLatest(StudentActionTypes.GET_STUDENTS_REQUEST, getStudents);
    yield takeLatest(StudentActionTypes.SAVE_STUDENT_REQUEST, saveStudent);
}

export default StudentSaga;
