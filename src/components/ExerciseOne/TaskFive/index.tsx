import * as React from 'react';

interface Props {
}

interface State {
    color: string;
}

export class TaskFive extends React.Component<Props, State> {
    constructor(props: Props, context?: any) {
        super(props, context);
        this.state = {
            color: "red"
        }

        this.selectColor = this.selectColor.bind(this);
        this.drowRect = this.drowRect.bind(this);
    }

    selectColor(color: string) {
        this.setState({color: color})
    }

    drowRect(event: any) {
        event.target.style.fill = this.state.color;
    }

    render() {
        return (
            <>
                <h3>Упраженние 5</h3>
                <p>Закрась самую длинную полоску в красный цвет. Закрась самую короткую полоску в зелёный цвет</p>
                <svg width="600" height="600" style={{backgroundColor: "darkgrey"}}>
                    <text x={10} y={25}>Выбери цвет:</text>
                    <rect x="110" y="10" width="20" height="20" fill={'white'}
                          onClick={() => this.selectColor('white')}/>
                    <rect x="135" y="10" width="20" height="20" fill={'green'}
                          onClick={() => this.selectColor('green')}/>
                    <rect x="160" y="10" width="20" height="20" fill={'red'} onClick={() => this.selectColor('red')}/>

                    <rect x="10" y="60" width="100" height="50" fill={'white'} onClick={this.drowRect}/>
                    <rect x="10" y="120" width="200" height="50" fill={'white'} onClick={this.drowRect}/>
                    <rect x="10" y="180" width="300" height="50" fill={'white'} onClick={this.drowRect}/>
                </svg>
            </>
        );
    }
}
