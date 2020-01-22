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
var Numpad = /** @class */ (function (_super) {
    __extends(Numpad, _super);
    function Numpad(props) {
        return _super.call(this, props) || this;
    }
    Numpad.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { id: "numpad" },
            React.createElement("div", { className: "selectionDisplay" },
                React.createElement("p", null,
                    (Math.round(this.props.credit * 100) / 100).toFixed(2),
                    " ChF")),
            React.createElement("div", { className: "selectionDisplay" },
                React.createElement("p", null, this.props.selection)),
            React.createElement("div", { className: "selectionDisplay" },
                React.createElement("button", { id: "confirmation", onClick: function (_e) { _this.props.chooseItem(+_this.props.selection); } }, "Confirm")),
            React.createElement("div", { id: "firstline", className: "line" },
                React.createElement("button", { onClick: function (_e) { _this.props.addSelection("7"); } }, "7"),
                React.createElement("button", { onClick: function (_e) { _this.props.addSelection("8"); } }, "8"),
                React.createElement("button", { onClick: function (_e) { _this.props.addSelection("9"); } }, "9")),
            React.createElement("div", { id: "secondline", className: "line" },
                React.createElement("button", { onClick: function (_e) { _this.props.addSelection("4"); } }, "4"),
                React.createElement("button", { onClick: function (_e) { _this.props.addSelection("5"); } }, "5"),
                React.createElement("button", { onClick: function (_e) { _this.props.addSelection("6"); } }, "6")),
            React.createElement("div", { id: "thirdline", className: "line" },
                React.createElement("button", { onClick: function (_e) { _this.props.addSelection("1"); } }, "1"),
                React.createElement("button", { onClick: function (_e) { _this.props.addSelection("2"); } }, "2"),
                React.createElement("button", { onClick: function (_e) { _this.props.addSelection("3"); } }, "3")),
            React.createElement("div", { id: "fourthline", className: "line" },
                React.createElement("button", { onClick: function (_e) { _this.props.clearSelection(); } }, "C"),
                React.createElement("button", { onClick: function (_e) { _this.props.addSelection("0"); } }, "0"),
                React.createElement("button", { onClick: function (_e) { _this.props.returnMoney(); } }, "R"))));
    };
    return Numpad;
}(React.Component));
exports.default = Numpad;
//# sourceMappingURL=Numpad.js.map