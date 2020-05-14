import {User} from "../../entity/entities";

export enum ClassActionTypes {
    GET_CLASSES_REQUEST = 'GET_CLASSES_REQUEST',
    SET_CLASSES = 'SET_CLASSES',
    GET_CLASS_REQUEST = 'GET_CLASS_REQUEST',
    SET_CLASS = 'SET_CLASS',
    SAVE_CLASS_REQUEST = 'CREATE_CLASS_REQUEST',
    CLEAR_CLASSES = 'CLEAR_CLASSES'
}

export const getClassesRequest = () => ({type: ClassActionTypes.GET_CLASSES_REQUEST, payload: null});
export const saveClassRequest = (studentClass: User) => ({
    type: ClassActionTypes.SAVE_CLASS_REQUEST,
    payload: studentClass
});
