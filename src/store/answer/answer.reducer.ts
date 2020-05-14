import {Answer} from "../../entity/entities";
import {AnswerActionTypes} from "./answer.action";

export interface AnswerState {
    answers: Answer[]
}

const initialState: AnswerState = {
    answers: [],
};

export const answerReducer = (state: AnswerState = initialState, action: { type: string, payload: any }): AnswerState => {
    switch (action.type) {
        case AnswerActionTypes.SET_ANSWERS:
            return {...state, answers: action.payload};
        case AnswerActionTypes.CLEAR_ANSWERS:
            return {...state, answers: []};
        default:
            return state;
    }
};

