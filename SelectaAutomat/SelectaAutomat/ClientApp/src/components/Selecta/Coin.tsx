import * as React from 'react';

interface IProps {
    img: string
    value: number
    onClick: ((credit: number) => void)
}

interface IState {
}

export default class Coin extends React.Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);
    }

    render() {
        return (
            <img src={this.props.img} height="50px" onClick={_e => { this.props.onClick(this.props.value) }} />
        );
    }
}