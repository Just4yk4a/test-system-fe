import { createSelector } from 'reselect';
import {State} from "../store/store";

const getUser = (state: State) => state.userState.user;

export const getUserState = createSelector(
    getUser,
    (user) => {
        return user;
    });

export const getLoggedState = createSelector(
    getUser,
    (user) => {
        return !!user;
    });
