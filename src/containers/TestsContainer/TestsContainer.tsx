import React from 'react';
import Tests from "../../components/Tests/Tests";
import {Route, Switch, useRouteMatch} from 'react-router-dom';
import TestCreate from "../../components/TestCreate/TestCreate";
import {useSelector} from "react-redux";
import {getUserState} from "../../selector/user.selector";


function TestsContainer() {
    let match = useRouteMatch();
    let user = useSelector(getUserState);

    const canEdit = !!user && !!user.role && user.role.name !== 'student';

    return (
        <Switch>
            {canEdit &&
            <Route path={`${match.url}/create`}>
                <TestCreate/>
            </Route>}
            <Route path={match.url}>
                <Tests tests={['text', 'text']} canEdit={canEdit}/>
            </Route>
        </Switch>
    );
}

export default TestsContainer;
