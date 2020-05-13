import {User} from "../../entity/entities";
import {TeacherActionTypes} from "./teacher.action";
import {UserActionTypes} from "../user/user.action";

export interface TeacherState {
    teachers: User[]
}

const initialState: TeacherState = {
    teachers: [],
};

export const teacherReducer = (state: TeacherState = initialState, action: {type: string, payload: any}): TeacherState => {
    switch (action.type) {
        case TeacherActionTypes.SET_TEACHERS:
            return { ...state, teachers: action.payload };
        case TeacherActionTypes.CLEAR_TEACHERS:
            return { ...state, teachers: []};
        case UserActionTypes.DELETE_USER_REQUEST:
            return { ...state, teachers: state.teachers.filter(teacher => teacher.id !== action.payload)};
        default:
            return state;
    }
};

