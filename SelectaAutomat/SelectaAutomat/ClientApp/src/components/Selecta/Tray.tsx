import * as React from 'react';
import TrayItem from './TrayItem'
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
        return (
            <div className="tray">
                <TrayItem item={this.props.item}/>             
            </div>
        )
    }
}