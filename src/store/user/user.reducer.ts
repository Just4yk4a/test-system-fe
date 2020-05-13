import {User} from "../../entity/entities";
import {UserActionTypes} from "./user.action";

export interface UserState {
    user: User | null
}

const initialState: UserState = {
    user: null,
};

export const userReducer = (state: UserState = initialState, action: { type: string, payload: any }): UserState => {
    switch (action.type) {
        case UserActionTypes.SET_USER:
            return {...state, user: action.payload};
        case UserActionTypes.CLEAR_USER:
            return {...state, user: null};
        default:
            return state;
    }
};

