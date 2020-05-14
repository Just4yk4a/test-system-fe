import {call, put, takeLatest} from 'redux-saga/effects'
import {Class} from "../../entity/entities";
import {ClassActionTypes} from "./class.action";
import {classService} from "../../service/class.service";

function* getClasses(action: any) {
    try {
        const classes: Class[] = yield call(classService.getClasses);
        yield put({type: ClassActionTypes.SET_CLASSES, payload: classes});
    } catch (e) {
        console.error(e);
    }
}

function* saveClass(action: any) {
    try {
        const newClass: Class = yield call(classService.saveClass, action.payload);
        yield put({type: ClassActionTypes.GET_CLASSES_REQUEST});
    } catch (e) {
        console.error(e);
    }
}

function* ClassSaga() {
    yield takeLatest(ClassActionTypes.GET_CLASSES_REQUEST, getClasses);
    yield takeLatest(ClassActionTypes.SAVE_CLASS_REQUEST, saveClass);
}

export default ClassSaga;
