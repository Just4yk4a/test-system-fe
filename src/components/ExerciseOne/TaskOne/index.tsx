import * as React from 'react';
import {Redirect} from "react-router";


export interface Props {
}

export interface State {
    clickedKey: number | null;
    hiddenCircles: number[];
}

export class TaskOne extends React.Component<Props, State> {
    circles = new Map();

    constructor(props: Props, context?: any) {
        super(props, context);
        this.state = {
            clickedKey: null,
            hiddenCircles: [],
        };

        this.onClickHandler = this.onClickHandler.bind(this);
    }

    onClickHandler(key: number) {
        if (this.state.clickedKey !== null) {
            if (Math.abs(key - this.state.clickedKey) === 1) {
                this.setState(prevState => ({
                    clickedKey: null,
                    hiddenCircles: prevState.hiddenCircles.concat([key, prevState.clickedKey as number])
                }))
            } else {
                this.setState({clickedKey: null});
            }
        } else {
            this.setState({clickedKey: key});
        }
    }

    getCircle(x: number, y: number, r: number, key: number) {
        const circle = <circle key={key} cx={x} cy={y} r={r} fill={this.state.clickedKey === key ? "blue" : "purple"}
                               onClick={() => this.onClickHandler(key)}/>;
        this.circles.set(key, circle);
        return circle;
    }

    render() {
        return (
            <>
                <h3>Упраженние 1</h3>
                <p>Найди предметы одинаковые по размеру</p>
                {this.state.hiddenCircles.length === 6 && window.confirm("Упраженние выполненно!") &&
                <Redirect to={'task-2'}/>}
                <svg width="600" height="600" style={{backgroundColor: "darkgrey"}}>
                    {this.state.hiddenCircles.includes(1) || this.getCircle(120, 400, 100, 1)}
                    {this.state.hiddenCircles.includes(2) || this.getCircle(460, 250, 100, 2)}
                    {this.state.hiddenCircles.includes(3) || this.getCircle(200, 150, 70, 3)}
                    {this.state.hiddenCircles.includes(4) || this.getCircle(400, 500, 70, 4)}
                    {this.state.hiddenCircles.includes(5) || this.getCircle(300, 300, 25, 5)}
                    {this.state.hiddenCircles.includes(6) || this.getCircle(500, 100, 25, 6)}
                </svg>
            </>
        );
    }
}
