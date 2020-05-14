import {Class} from "../../entity/entities";
import {ClassActionTypes} from "./class.action";

export interface ClassState {
    classes: Class[]
}

const initialState: ClassState = {
    classes: [],
};

export const classReducer = (state: ClassState = initialState, action: { type: string, payload: any }): ClassState => {
    switch (action.type) {
        case ClassActionTypes.SET_CLASSES:
            return {...state, classes: action.payload};
        case ClassActionTypes.CLEAR_CLASSES:
            return {...state, classes: []};
        default:
            return state;
    }
};
