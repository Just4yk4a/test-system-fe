export enum UserActionTypes {
    GET_USER_REQUEST = 'GET_USER_REQUEST',
    DELETE_USER_REQUEST = 'DELETE_USER_REQUEST',
    SET_USER = 'SET_USER',
    CLEAR_USER = 'CLEAR_USER',
    CREATE_USER = 'CREATE_USER',
}

export const getUserRequest = (mail: string, pass: string) => ({type: UserActionTypes.GET_USER_REQUEST, payload: {mail, pass}});
export const logOutRequest = () => ({type: UserActionTypes.CLEAR_USER});
export const deleteUserRequest = (userId: number) => ({type: UserActionTypes.DELETE_USER_REQUEST, payload: userId});
