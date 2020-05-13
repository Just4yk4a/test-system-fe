import { createSelector } from 'reselect';
import {State} from "../store/store";

const getStudents = (state: State) => state.studentState.students;

export const getStudentsState = createSelector(
    getStudents,
    (students) => {
        return students;
    });
