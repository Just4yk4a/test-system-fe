import React from 'react';
import {Redirect, Route} from "react-router";
import './App.css';
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import LoginContainer from "../LoginContainer/LoginContainer";
import { Switch } from 'react-router'
import MainPageContainer from "../MainPageContainer/MainPageContainer";


function App() {
    return (
        <Switch>
            <Route exact path="/login">
                <LoginContainer/>
            </Route>
            <PrivateRoute path="/home">
                <MainPageContainer/>
            </PrivateRoute>
            <Redirect to={'/home'}/>
        </Switch>
    );
}

export default App;
