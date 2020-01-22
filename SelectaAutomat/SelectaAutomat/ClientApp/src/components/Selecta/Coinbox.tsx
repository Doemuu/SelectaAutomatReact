import * as React from 'react';
import Coin from './Coin';
import fr_5 from '../../res/img/fr_5.png';
import fr_2 from '../../res/img/fr_2.png';
import fr_1 from '../../res/img/fr_1.png';
import fr_0_5 from '../../res/img/fr_0.5.png';
import fr_0_2 from '../../res/img/fr_0.2.png';
import fr_0_1 from '../../res/img/fr_0.1.png';

interface IProps {
    addMoney: ((credit: number) => void)
}

interface IState {
}

export default class Coinbox extends React.Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);
    }

    render() {
        return (
            <div className="outerbox">
                <div className="innerbox">
                    <Coin img={fr_5} value={5} onClick={this.props.addMoney} />
                    <Coin img={fr_2} value={2} onClick={this.props.addMoney} />
                    <Coin img={fr_1} value={1} onClick={this.props.addMoney} />
                    <Coin img={fr_0_5} value={0.5} onClick={this.props.addMoney} />
                    <Coin img={fr_0_2} value={0.2} onClick={this.props.addMoney} />
                    <Coin img={fr_0_1} value={0.1} onClick={this.props.addMoney} />
                </div>
            </div>
        );
    }
}