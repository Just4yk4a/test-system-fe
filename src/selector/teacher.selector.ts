import { createSelector } from 'reselect';
import {State} from "../store/store";

const getTeacher = (state: State) => state.teacherState.teachers;

export const getTeachersState = createSelector(
    getTeacher,
    (teachers) => {
        return teachers;
    });
