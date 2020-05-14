import {Answer} from "../../entity/entities";

export enum AnswerActionTypes {
    GET_ANSWERS_REQUEST = 'GET_ANSWERS_REQUEST',
    SET_ANSWERS = 'SET_ANSWERS',
    GET_ANSWER_REQUEST = 'GET_ANSWER_REQUEST',
    SET_ANSWER = 'SET_ANSWER',
    SAVE_ANSWER_REQUEST = 'CREATE_ANSWER_REQUEST',
    CLEAR_ANSWERS = 'CLEAR_ANSWERS'
}

export const getAnswersRequest = () => ({type: AnswerActionTypes.GET_ANSWERS_REQUEST, payload: null});
export const saveAnswerRequest = (studentAnswer: Answer) => ({
    type: AnswerActionTypes.SAVE_ANSWER_REQUEST,
    payload: studentAnswer
});
