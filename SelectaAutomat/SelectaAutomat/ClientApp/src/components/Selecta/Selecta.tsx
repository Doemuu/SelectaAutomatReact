import * as React from 'react';
import { connect } from 'react-redux';
import Machine from './Machine';
import '../../res/css/SelectaStyle.css';
import cokeImg from '../../res/img/coke.png';
import nesteaImg from '../../res/img/nestea.png';

export class SelectaMachine {
    items: SelectaMachineItem[] = []
    selectedItem?: SelectaMachineItem

    constructor(items: SelectaMachineItem[]) {
        this.items = items
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
    id: number
    credit: number = 0
    selection: string = ""
}

interface IProps {
    startCredit: number
}

interface IState {
    selectaMachine?: SelectaMachine
    currentUser?: User
}

class Selecta extends React.Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);

        this.addSelection = this.addSelection.bind(this);
        this.clearSelection = this.clearSelection.bind(this);
        this.returnMoney = this.returnMoney.bind(this);
        this.addMoney = this.addMoney.bind(this);
        this.chooseItem = this.chooseItem.bind(this);

        fetch('api/selecta/getSelecta')
            .then(response => response.json() as Promise<SelectaMachine>)
            .then(data => {
                this.setState({ selectaMachine: data });
            });

        fetch('api/selecta/createUser')
            .then(response => response.json() as Promise<User>)
            .then(data => {
                this.setState({ currentUser: data });
            });
    }

    addSelection(selection: String) {
        const currentUser = this.state.currentUser;

        if (!currentUser) return;

        currentUser.selection += selection;
        this.setState({
            currentUser: currentUser
        });
    }

    clearSelection() {
        const currentUser = this.state.currentUser;

        if (!currentUser) return;

        currentUser.selection = "";
        this.setState({
            currentUser: currentUser
        })
    }

    returnMoney() {
        const currentUser = this.state.currentUser;

        if (!currentUser) return;

        currentUser.credit = 0;
        this.setState({
            currentUser: currentUser
        })
    }

    addMoney(credit: number) {
        const currentUser = this.state.currentUser;

        if (!currentUser) return;

        currentUser.credit += credit;
        this.setState({
            currentUser: currentUser
        })
    }

    chooseItem(index: number) {
        const selectaMachine = this.state.selectaMachine;
        const currentUser = this.state.currentUser;

        if (!selectaMachine || !currentUser) return;

        var selectedItem = selectaMachine.items.filter(element => element.index == index)[0];
        if (selectedItem) {
            //Valid input
            if (currentUser.credit >= selectedItem.price) {
                //He has the money
                currentUser.credit -= selectedItem.price
                selectaMachine.selectedItem = selectedItem
                this.setState({
                    selectaMachine: selectaMachine
                })

            } else {
                //He does not have the money
            }
        } else {
            //Invalid input
        }
    }

    render() {
        return (
            !this.state.selectaMachine ?
                <p>Loading...</p> :
                <div>
                    <p>Drinks:</p>

                    <Machine
                        addSelection={this.addSelection}
                        clearSelection={this.clearSelection}
                        returnMoney={this.returnMoney}
                        addMoney={this.addMoney}
                        chooseItem={this.chooseItem}
                        items={this.state.selectaMachine.items}
                        item={this.state.selectaMachine.selectedItem}
                        credit={this.state.currentUser.credit}
                        selection={this.state.currentUser.selection}
                    />
                </div>
        );
    }

}

export default connect()(Selecta);