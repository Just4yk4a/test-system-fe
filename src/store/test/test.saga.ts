import {call, put, takeLatest} from 'redux-saga/effects'
import {Survey, TestVO} from "../../entity/entities";
import {TestActionTypes} from "./test.action";
import {testService} from "../../service/test.service";
import {push} from "connected-react-router";

function* getTests(action: any) {
    try {
        const testVOs: TestVO[] = yield call(testService.getTests);
        const tests: Survey[] = testVOs.map(test => {
            const survey = new Survey();
            survey.id = test.id;
            survey.title = test.name;
            survey.questions = JSON.parse(test.json);
            return survey;
        });
        yield put({type: TestActionTypes.SET_TESTS, payload: tests});
    } catch (e) {
        console.error(e);
    }
}

function* saveTest(action: any) {
    try {
        const test: any = {
            id: action.payload.id,
            name: action.payload.title,
            json: JSON.stringify(action.payload.questions),
        };
        yield call(testService.createTest, test);
        yield put(push('/home/tests'));
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
