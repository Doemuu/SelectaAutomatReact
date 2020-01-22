import * as React from 'react';
import { connect } from 'react-redux';
import Machine from './Machine';
import '../../res/css/SelectaStyle.css';
import cokeImg from '../../res/img/coke.png';
import nesteaImg from '../../res/img/nestea.png';

export class SelectaMachine {
    selection: string = ""
    items: SelectaMachineItem[] = []
    selectedItem?: SelectaMachineItem
    currentUser: User

    constructor(items: SelectaMachineItem[], currentUser: User) {
        this.items = items
        this.currentUser = currentUser
    }
}

export class SelectaMachineItem {
    price: number = 0
    index: number = 0
    level: number = 0
    name: string = ""
    img: string = ""

    constructor(price: number, index: number, level: number, name: string, img: string) {
        this.price = price
        this.index = index
        this.level = level
        this.name = name
        this.img = img
    }
}

export class User {
    credit: number = 0
}

interface IProps {
    startCredit: number
}

interface IState {
    selectaMachine: SelectaMachine
}

class Selecta extends React.Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);

        const cocaCola = new SelectaMachineItem(3.5, 12, 2, "Coca Cola", cokeImg);
        const nestea = new SelectaMachineItem(2.5, 11, 5, "Nestea", nesteaImg);
        const items = [cocaCola, nestea];
        const user = new User();
        const selectaMachine = new SelectaMachine(items, user);

        this.state = {
            selectaMachine: selectaMachine,
        }

        this.addSelection = this.addSelection.bind(this);
        this.clearSelection = this.clearSelection.bind(this);
        this.returnMoney = this.returnMoney.bind(this);
        this.addMoney = this.addMoney.bind(this);
        this.chooseItem = this.chooseItem.bind(this);
    }

    addSelection(selection: String) {
        const selectaMachine = this.state.selectaMachine;
        selectaMachine.selection += selection;
        this.setState({
            selectaMachine: selectaMachine
        });
    }

    clearSelection() {
        const selectaMachine = this.state.selectaMachine;
        selectaMachine.selection = "";
        this.setState({
            selectaMachine: selectaMachine
        })
    }

    returnMoney() {
        const selectaMachine = this.state.selectaMachine;
        selectaMachine.currentUser.credit = 0;
        this.setState({
            selectaMachine: selectaMachine
        })
    }

    addMoney(credit: number) {
        const selectaMachine = this.state.selectaMachine;
        selectaMachine.currentUser.credit += credit;
        this.setState({
            selectaMachine: selectaMachine
        })
    }

    chooseItem(index: number) {
        const selectaMachine = this.state.selectaMachine;
        var selectedItem = selectaMachine.items.filter(element => element.index == index)[0];
        if (selectedItem) {
            //Valid input
            if (selectaMachine.currentUser.credit >= selectedItem.price) {
                //He has the money
                selectaMachine.currentUser.credit -= selectedItem.price
                selectaMachine.selectedItem = selectedItem
                this.setState({
                    selectaMachine : selectaMachine
                })
                
            } else {
                //He does not have the money
            }
        } else {
            //Invalid input
        }
    }

    render() {
        const items = this.state.selectaMachine.items
        return (
            <div>
                <p>Drinks:</p>
                
                <Machine
                    addSelection={this.addSelection}
                    clearSelection={this.clearSelection}
                    returnMoney={this.returnMoney}
                    addMoney={this.addMoney}
                    chooseItem={this.chooseItem}
                    items={items}
                    item={this.state.selectaMachine.selectedItem}
                    credit={this.state.selectaMachine.currentUser.credit}
                    selection={this.state.selectaMachine.selection}
                />
            </div>
        );
    }

}

export default connect()(Selecta);