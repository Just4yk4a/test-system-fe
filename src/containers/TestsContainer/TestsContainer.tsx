import React, {useEffect} from 'react';
import Tests from "../../components/Tests/Tests";
import {Route, Switch, useRouteMatch} from 'react-router-dom';
import TestCreate from "../../components/TestCreate/TestCreate";
import {useDispatch, useSelector} from "react-redux";
import {getUserState} from "../../selector/user.selector";
import {deleteTestRequest, getTestsRequest, saveTestRequest} from "../../store/test/test.action";
import {Survey} from "../../entity/entities";
import {getTestsState} from "../../selector/test.selector";


function TestsContainer() {
    let match = useRouteMatch();
    const dispatch = useDispatch();
    let user = useSelector(getUserState);

    useEffect(() => {
        dispatch(getTestsRequest());
    }, []);

    const tests: Survey[] = useSelector(getTestsState);

    const onSaveHandler = (test: Survey) => {
        dispatch(saveTestRequest(test));
    };

    const onDeleteHandler = (id: number) => {
        window.confirm('Are you want to delete the test?') && dispatch(deleteTestRequest(id));
    };

    const canEdit = !!user && !!user.role && user.role.name !== 'student';

    return (
        <Switch>
            {canEdit &&
            <Route path={`${match.url}/create`}>
                <TestCreate onSave={onSaveHandler}/>
            </Route>}
            <Route path={match.url}>
                <Tests tests={tests} canEdit={canEdit} onDelete={onDeleteHandler}/>
            </Route>
        </Switch>
    );
}

export default TestsContainer;
