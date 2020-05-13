import {createSelector} from 'reselect';
import {State} from "../store/store";

const getTests = (state: State) => state.testState.tests;

export const getTestsState = createSelector(
    getTests,
    (tests) => {
        return tests;
    });
