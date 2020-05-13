import {applyMiddleware, combineReducers, createStore} from '@reduxjs/toolkit';
import {teacherReducer, TeacherState} from "./teacher/teacher.reducer";
import {all} from 'redux-saga/effects';
import TeacherSaga from "./teacher/teacher.saga";
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'
import {connectRouter, routerMiddleware, RouterState} from 'connected-react-router'
import * as History from 'history'
import axios, {AxiosResponse} from 'axios';
import {userReducer, UserState} from "./user/user.reducer";
import UserSaga from "./user/user.saga";
import {studentReducer, StudentState} from "./student/student.reducer";
import StudentSaga from "./student/student.saga";
import {testReducer, TestState} from "./test/test.reducer";
import TestSaga from "./test/test.saga";

export const history = History.createBrowserHistory();

export interface State {
    teacherState: TeacherState;
    studentState: StudentState;
    userState: UserState;
    testState: TestState;
    router: RouterState,
}

export const reducers = combineReducers<State>({
    teacherState: teacherReducer,
    studentState: studentReducer,
    userState: userReducer,
    testState: testReducer,
    router: connectRouter(history)
});

function* sagas() {
    yield all([TeacherSaga(), StudentSaga(), UserSaga(), TestSaga()])
}


const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
    reducers,
    applyMiddleware(routerMiddleware(history), sagaMiddleware, logger)
);
sagaMiddleware.run(sagas);

axios.interceptors.response.use(
    (response: AxiosResponse) => {
        return response.data;
    },
    function (error) {
        return Promise.reject(error.response);
    }
);
