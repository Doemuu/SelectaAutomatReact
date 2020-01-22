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
var Coin = /** @class */ (function (_super) {
    __extends(Coin, _super);
    function Coin(props) {
        return _super.call(this, props) || this;
    }
    Coin.prototype.render = function () {
        var _this = this;
        return (React.createElement("img", { src: this.props.img, height: "50px", onClick: function (_e) { _this.props.onClick(_this.props.value); } }));
    };
    return Coin;
}(React.Component));
exports.default = Coin;
//# sourceMappingURL=Coin.js.map