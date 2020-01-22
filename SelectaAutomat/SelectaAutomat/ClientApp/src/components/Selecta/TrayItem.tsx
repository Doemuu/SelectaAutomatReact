import * as React from 'react';
import { SelectaMachineItem } from './Selecta';

interface IProps {
    item?: SelectaMachineItem
}

interface IState {
}

export default class Coinbox extends React.Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);
    }

    render() {
        if (this.props.item != null) {
            return (
                <div className="trayItem">
                    <img src={this.props.item.img} height="100" />
                </div>
            )
        } else {
            return (
                <div className="trayItem">
                    <p></p>
                </div>
            )
        }
    }
}