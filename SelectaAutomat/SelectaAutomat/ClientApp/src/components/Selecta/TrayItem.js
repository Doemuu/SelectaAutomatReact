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
var Coinbox = /** @class */ (function (_super) {
    __extends(Coinbox, _super);
    function Coinbox(props) {
        return _super.call(this, props) || this;
    }
    Coinbox.prototype.render = function () {
        if (this.props.item != null) {
            return (React.createElement("div", { className: "trayItem" },
                React.createElement("img", { src: this.props.item.img, height: "100" })));
        }
        else {
            return (React.createElement("div", { className: "trayItem" },
                React.createElement("p", null)));
        }
    };
    return Coinbox;
}(React.Component));
exports.default = Coinbox;
//# sourceMappingURL=TrayItem.js.map