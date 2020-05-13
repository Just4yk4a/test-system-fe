import {User} from "../../entity/entities";
import {StudentActionTypes} from "./student.action";
import {UserActionTypes} from "../user/user.action";

export interface StudentState {
    students: User[]
}

const initialState: StudentState = {
    students: [],
};

export const studentReducer = (state: StudentState = initialState, action: {type: string, payload: any}): StudentState => {
    switch (action.type) {
        case StudentActionTypes.SET_STUDENTS:
            return { ...state, students: action.payload };
        case StudentActionTypes.CLEAR_STUDENT:
            return { ...state, students: []};
        case UserActionTypes.DELETE_USER_REQUEST:
            return { ...state, students: state.students.filter(student => student.id !== action.payload)};
        default:
            return state;
    }
};

