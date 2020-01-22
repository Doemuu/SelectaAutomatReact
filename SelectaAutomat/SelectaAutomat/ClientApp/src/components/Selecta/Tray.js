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
var TrayItem_1 = require("./TrayItem");
var Coinbox = /** @class */ (function (_super) {
    __extends(Coinbox, _super);
    function Coinbox(props) {
        return _super.call(this, props) || this;
    }
    Coinbox.prototype.render = function () {
        return (React.createElement("div", { className: "tray" },
            React.createElement(TrayItem_1.default, { item: this.props.item })));
    };
    return Coinbox;
}(React.Component));
exports.default = Coinbox;
//# sourceMappingURL=Tray.js.map