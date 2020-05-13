import {call, put, takeLatest} from 'redux-saga/effects'
import {Survey} from "../../entity/entities";
import {TestActionTypes} from "./test.action";
import {testService} from "../../service/test.service";

function* getTests(action: any) {
    try {
        const test: Survey[] = yield call(testService.getTests);
        yield put({type: TestActionTypes.SET_TESTS, payload: test});
    } catch (e) {
        console.error(e);
    }
}

function* saveTest(action: any) {
    try {
        const test: any = {
            id: action.payload.id,
            name: action.payload.name,
            json: JSON.stringify(action.payload.questions),
        };
        const newTest: Survey = yield call(testService.createTest, test);
        yield put({type: TestActionTypes.GET_TESTS_REQUEST});
    } catch (e) {
        console.error(e);
    }
}

function* TestSaga() {
    yield takeLatest(TestActionTypes.GET_TESTS_REQUEST, getTests);
    yield takeLatest(TestActionTypes.SAVE_TEST_REQUEST, saveTest);
}

export default TestSaga;
