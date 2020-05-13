import {TestActionTypes} from "./test.action";
import {Survey} from "../../entity/entities";

export interface TestState {
    tests: Survey[]
}

const initialState: TestState = {
    tests: [],
};

export const testReducer = (state: TestState = initialState, action: { type: string, payload: any }): TestState => {
    switch (action.type) {
        case TestActionTypes.SET_TESTS:
            return {...state, tests: action.payload};
        case TestActionTypes.CLEAR_TEST:
            return {...state, tests: []};
        case TestActionTypes.DELETE_TEST_REQUEST:
            return {...state, tests: state.tests.filter(test => test.id !== action.payload)};
        default:
            return state;
    }
};

