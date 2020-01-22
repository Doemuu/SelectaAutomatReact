"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Numpad_1 = require("./Numpad");
var Coinbox_1 = require("./Coinbox");
var Itembox_1 = require("./Itembox");
var Tray_1 = require("./Tray");
var Machine = /** @class */ (function (_super) {
    __extends(Machine, _super);
    function Machine(props) {
        return _super.call(this, props) || this;
    }
    Machine.prototype.render = function () {
        return (React.createElement("div", { className: "machine" },
            React.createElement("div", { className: "left" },
                React.createElement(Itembox_1.default, { items: this.props.items }),
                React.createElement(Tray_1.default, { item: this.props.item })),
            React.createElement("div", { className: "right" },
                React.createElement(Numpad_1.default, { addSelection: this.props.addSelection, clearSelection: this.props.clearSelection, returnMoney: this.props.returnMoney, chooseItem: this.props.chooseItem, credit: this.props.credit, selection: this.props.selection }),
                React.createElement(Coinbox_1.default, { addMoney: this.props.addMoney }))));
    };
    return Machine;
}(React.Component));
exports.default = Machine;
//# sourceMappingURL=Machine.js.map