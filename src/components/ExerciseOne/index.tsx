import * as React from 'react';
import './style.css';
import {Route} from "react-router";
import {Link, useRouteMatch} from "react-router-dom";
import {TaskOne} from "./TaskOne";
import {TaskTwo} from "./TaskTwo";
import {TaskThree} from "./TaskThree";
import {TaskFour} from "./TaskFour";
import {TaskFive} from "./TaskFive";

interface Props {
}

interface State {
}

export function ExerciseOne(props: Props) {
    let match = useRouteMatch();

    return (
        <div className={'content'}>
            <div className={'list'}>
                <button><Link to={`${match.url}/exercise-1/task-1`}> Упражнение 1 </Link></button>
                <button><Link to={`${match.url}/exercise-1/task-2`}> Упражнение 2 </Link></button>
                <button><Link to={`${match.url}/exercise-1/task-3`}> Упражнение 3 </Link></button>
                <button><Link to={`${match.url}/exercise-1/task-4`}> Упражнение 4 </Link></button>
                <button><Link to={`${match.url}/exercise-1/task-5`}> Упражнение 5 </Link></button>
                <button><Link to={`${match.url}/exercise-1/task-6`}> Упражнение 6 </Link></button>
                <button><Link to={`${match.url}/exercise-1/task-7`}> Упражнение 7 </Link></button>
            </div>
            <div className={'task'}>
                <Route path={`${match.url}/exercise-1/task-1`} component={TaskOne}/>
                <Route path={`${match.url}/exercise-1/task-2`} component={TaskTwo}/>
                <Route path={`${match.url}/exercise-1/task-3`} component={TaskThree}/>
                <Route path={`${match.url}/exercise-1/task-4`} component={TaskFour}/>
                <Route path={`${match.url}/exercise-1/task-5`} component={TaskFive}/>
            </div>
        </div>
    );

}
