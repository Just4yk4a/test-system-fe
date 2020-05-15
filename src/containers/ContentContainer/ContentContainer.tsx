import React from 'react';
import {Route, useRouteMatch} from "react-router";
import {ExerciseOne} from "../../components/ExerciseOne";
import StudentsContainer from "../StudentsContainer/StudentsContainer";
import TeachersContainer from "../TeachersContainer/TeachersContainer";
import ClassesContainer from "../ClassesContainer/ClassesContainer";
import {Redirect, Switch} from 'react-router-dom';
import TestsContainer from "../TestsContainer/TestsContainer";


function ContentContainer() {
    let match = useRouteMatch();

    return (
        <Switch>
            <Route path={`${match.url}/teachers`} component={TeachersContainer}/>
            <Route path={`${match.url}/students`} component={StudentsContainer}/>
            <Route path={`${match.url}/classes`} component={ClassesContainer}/>
            <Route path={`${match.url}/tests`} component={TestsContainer}/>
            <Route path={`${match.url}/exercises`} component={ExerciseOne}/>
            <Route path={match.path}>
                <Redirect to={`${match.url}/tests`}/>
            </Route>
        </Switch>
    );
}

export default ContentContainer;
