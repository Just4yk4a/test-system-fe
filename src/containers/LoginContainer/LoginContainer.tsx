import React from 'react'
import {useDispatch} from 'react-redux'
import {getUserRequest} from "../../store/user/user.action";
import Login from "../../components/Login/Login";

export default function LoginContainer() {
    const dispatch = useDispatch();

    const onLogInHandler = (login: string, password: string): void => {
        dispatch(getUserRequest(login, password));
    };

    return <Login onLogIn={(login: string, password: string) => onLogInHandler(login, password)}/>
}
