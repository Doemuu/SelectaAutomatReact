import * as React from 'react';
import { SelectaMachineItem } from './Selecta';

interface IProps {
    item: SelectaMachineItem;
}

interface IState {
}

export default class SelectaItem extends React.Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);
    }

    render() {
        return (
            <div className="item">
                <img src={this.props.item.img} height="100"/>
                <p>{this.props.item.price}</p>
                <p>{this.props.item.index}</p>
            </div>
        );
    }
}