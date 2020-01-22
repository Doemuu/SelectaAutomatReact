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
var SelectaItem = /** @class */ (function (_super) {
    __extends(SelectaItem, _super);
    function SelectaItem(props) {
        return _super.call(this, props) || this;
    }
    SelectaItem.prototype.render = function () {
        return (React.createElement("div", { className: "item" },
            React.createElement("img", { src: this.props.item.img, height: "100" }),
            React.createElement("p", null, this.props.item.price),
            React.createElement("p", null, this.props.item.index)));
    };
    return SelectaItem;
}(React.Component));
exports.default = SelectaItem;
//# sourceMappingURL=SelectaItem.js.map