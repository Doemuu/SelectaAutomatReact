import * as React from 'react';
import SelectaItem from './SelectaItem';
import { SelectaMachineItem } from './Selecta';

interface IProps {
    items: SelectaMachineItem[]
}

interface IState {
}

export default class Itembox extends React.Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);
    }

    render() {
        return (
            <div className="items">
                <div className="products">
                    {this.props.items.map(item => <SelectaItem item={item} key={this.props.items.indexOf(item)} />)}
                </div>
            </div>
        );
    }
}