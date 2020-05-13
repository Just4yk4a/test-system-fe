import React from 'react'
import {useDispatch} from 'react-redux'
import {useHistory} from 'react-router'
import MainPage from "../../components/MainPage/MainPage";
import {logOutRequest} from "../../store/user/user.action";

export default function MainPageContainer() {
    const dispatch = useDispatch();
    const history = useHistory();

    const onLogOutHandler = () => {
        dispatch(logOutRequest());
        history.push('/login');
    };

    return (
        <MainPage onLogOut={onLogOutHandler}/>
    )
}
