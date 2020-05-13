import * as React from 'react';

interface Props {
}

interface State {
}

export class TaskFour extends React.Component<Props, State> {
    constructor(props: Props, context?: any) {
        super(props, context);
    }

    render() {
        return (
            <>
                <h3>Упраженние 4</h3>
                <p>Найди предметы одинаковые по размеру</p>
            </>
        );
    }
}
