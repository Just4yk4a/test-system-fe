import {call, put, takeLatest} from 'redux-saga/effects'
import {Answer} from "../../entity/entities";
import {AnswerActionTypes} from "./answer.action";
import {answerService} from "../../service/answer.service";

function* getAnswers(action: any) {
    try {
        const answers: Answer[] = yield call(answerService.getAnswers);
        yield put({type: AnswerActionTypes.SET_ANSWERS, payload: answers});
    } catch (e) {
        console.error(e);
    }
}

function* saveAnswer(action: any) {
    try {
        const answer: Answer = yield call(answerService.saveAnswer, action.payload);
        yield put({type: AnswerActionTypes.GET_ANSWERS_REQUEST});
    } catch (e) {
        console.error(e);
    }
}

function* AnswerSaga() {
    yield takeLatest(AnswerActionTypes.GET_ANSWERS_REQUEST, getAnswers);
    yield takeLatest(AnswerActionTypes.SAVE_ANSWER_REQUEST, saveAnswer);
}

export default AnswerSaga;
