import * as React from 'react';
import img from './mushroom.png';


export interface Props {
}

interface State {
}

export class TaskTwo extends React.Component<Props, State> {
    constructor(props: Props, context?: any) {
        super(props, context);
    }

    render() {
        return (
            <>
                <h3>Упраженние 2</h3>
                <p>Найди предметы одинаковые по размеру</p>
                {/*<svg width="600" height="600" style={{backgroundColor: "darkgrey"}}>*/}
                {/*  <image x={100} y={100} width={300} height={300} xlinkHref={"src/assets/images/mushroom.png"}/>*/}
                {/*</svg>*/}
                <img src={img}/>
            </>
        );
    }
}
