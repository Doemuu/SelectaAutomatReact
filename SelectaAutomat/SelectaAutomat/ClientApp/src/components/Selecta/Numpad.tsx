import * as React from 'react';
import { SelectaMachine } from './Selecta';
import { Button } from 'reactstrap';

interface IProps {
    addSelection: ((selection: string) => void)
    clearSelection: (() => void)
    returnMoney: (() => void)
    chooseItem: ((index: number) => void)
    credit: number
    selection: string;
}

interface IState {
}

export default class Numpad extends React.Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);
    }

    render() {
        return (
            <div id="numpad">
                <div className="selectionDisplay">
                    <p>{(Math.round(this.props.credit * 100) / 100).toFixed(2)} ChF</p>
                </div>
                <div className="selectionDisplay">
                    <p>{this.props.selection}</p>
                </div>
                <div className="selectionDisplay">
                    <button id="confirmation" onClick={_e => { this.props.chooseItem(+this.props.selection) }}>Confirm</button>
                </div>
                <div id="firstline" className="line">
                    <button onClick={_e => { this.props.addSelection("7") }}>7</button>
                    <button onClick={_e => { this.props.addSelection("8") }}>8</button>
                    <button onClick={_e => { this.props.addSelection("9") }}>9</button>
                </div>
                <div id="secondline" className="line">
                    <button onClick={_e => { this.props.addSelection("4") }}>4</button>
                    <button onClick={_e => { this.props.addSelection("5") }}>5</button>
                    <button onClick={_e => { this.props.addSelection("6") }}>6</button>
                </div>
                <div id="thirdline" className="line">
                    <button onClick={_e => { this.props.addSelection("1") }}>1</button>
                    <button onClick={_e => { this.props.addSelection("2") }}>2</button>
                    <button onClick={_e => { this.props.addSelection("3") }}>3</button>
                </div>
                <div id="fourthline" className="line">
                    <button onClick={_e => { this.props.clearSelection() }}>C</button>
                    <button onClick={_e => { this.props.addSelection("0") }}>0</button>
                    <button onClick={_e => { this.props.returnMoney() }}>R</button>
                </div>
            </div>
        );
    }

}