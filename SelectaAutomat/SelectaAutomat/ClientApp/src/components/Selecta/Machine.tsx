import * as React from 'react';
import Numpad from './Numpad';
import Coinbox from './Coinbox';
import Itembox from './Itembox';
import Tray from './Tray'
import { SelectaMachineItem } from './Selecta';

interface IProps {
    addSelection: ((selection: string) => void)
    clearSelection: (() => void)
    returnMoney: (() => void)
    addMoney: ((credit: number) => void)
    chooseItem: ((index: number)=> void)
    item?: SelectaMachineItem
    items: SelectaMachineItem[]
    credit: number
    selection: string
}

interface IState {
}

export default class Machine extends React.Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);
    }

    render() {
        return (
            <div className="machine">
                <div className="left">
                    <Itembox items={this.props.items} />
                    <Tray item={this.props.item} />
                </div>
                <div className="right">
                    <Numpad addSelection={this.props.addSelection}
                        clearSelection={this.props.clearSelection}
                        returnMoney={this.props.returnMoney}
                        chooseItem={this.props.chooseItem}
                        credit={this.props.credit}
                        selection={this.props.selection}
                    />
                <Coinbox addMoney={this.props.addMoney} />
                </div>
            </div>
        );
    }

}