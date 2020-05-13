import * as React from 'react';
import {Redirect} from "react-router";


interface Props {
}

interface State {
    clickedKey: number | null;
    hiddenCircles: number[];
}


export class TaskThree extends React.Component<Props, State> {
    constructor(props: Props, context?: any) {
        super(props, context);
        this.state = {
            clickedKey: null,
            hiddenCircles: [],
        };
    }

    render() {
        return (
            <>
                <h3>Упраженние 3</h3>
                <p>Выбери сначала все маленькие фигуры, а потом все большие</p>
                {this.state.hiddenCircles.length === 6 && window.confirm("Упраженние выполненно!") &&
                <Redirect to={'task-2'}/>}
                <svg width="600" height="600" style={{backgroundColor: "darkgrey"}}>
                    <polygon points="60,10 10,70 110,70" fill="purple"/>
                    <polygon points="400,210 350,270 450,270" fill="purple"/>
                    <polygon points="250,400 200,460 300,460" fill="purple"/>
                    <circle cx={150} cy={150} r={30} fill={"purple"}/>
                    <circle cx={100} cy={500} r={30} fill={"purple"}/>
                    <circle cx={400} cy={400} r={30} fill={"purple"}/>

                    <circle cx={500} cy={100} r={70} fill={"purple"}/>
                    <polygon points="450,440 330,570 570,570" fill="purple"/>
                    <polygon points="150,230 30,360 270,360" fill="purple"/>
                </svg>
            </>
        );
    }
}
