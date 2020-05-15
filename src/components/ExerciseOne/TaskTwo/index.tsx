import * as React from 'react';
import img from './mushroom.png';
import {Redirect} from "react-router";


export interface Props {
}

interface State {
    count: number;
}

export class TaskTwo extends React.Component<Props, State> {
    element: any = null;

    constructor(props: Props, context?: any) {
        super(props, context);
        this.state = {count: 0};
    }

    onClickHandler(el: any, key: number) {
        if (el.target.getAttribute('opacity') === '0') {
            return;
        }
        if (this.element === null) {
            this.element = el.target;
            el.target.setAttribute('opacity', '0.5');
        } else {
            if (this.element.getAttribute('width') === el.target.getAttribute('width')
                && this.element.getAttribute('id') !== el.target.getAttribute('id')) {

                this.setState(prevState => ({count: prevState.count + 1}))

                el.target.setAttribute('opacity', '0');
                this.element.setAttribute('opacity', '0');
            } else {
                this.element.setAttribute('opacity', '1');
            }
            this.element = null;
        }
    }

    render() {
        return (
            <>
                {this.state.count === 3 && window.confirm("Упраженние выполненно!") &&
                <Redirect to={'task-3'}/>}
                <h3>Упраженние 2</h3>
                <p>Найди предметы одинаковые по размеру</p>
                <svg width="600" height="600" style={{backgroundColor: "darkgrey"}}>
                    {<image id={'img-1'} x={20} y={300} width={200} height={200} xlinkHref={img}
                            onClick={(event) => this.onClickHandler(event, 1)}/>}
                    {<image id={'img-2'} x={360} y={150} width={200} height={200} xlinkHref={img}
                            onClick={(event) => this.onClickHandler(event, 2)}/>}
                    {<image id={'img-3'} x={100} y={50} width={140} height={140} xlinkHref={img}
                            onClick={(event) => this.onClickHandler(event, 3)}/>}
                    {<image id={'img-4'} x={300} y={400} width={140} height={140} xlinkHref={img}
                            onClick={(event) => this.onClickHandler(event, 4)}/>}
                    {<image id={'img-5'} x={200} y={200} width={50} height={50} xlinkHref={img}
                            onClick={(event) => this.onClickHandler(event, 5)}/>}
                    {<image id={'img-6'} x={400} y={0} width={50} height={50} xlinkHref={img}
                            onClick={(event) => this.onClickHandler(event, 6)}/>}
                </svg>
                {/*<img src={img}/>*/}
            </>
        );
    }
}
