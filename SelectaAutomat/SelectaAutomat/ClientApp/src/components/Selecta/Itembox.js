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
var SelectaItem_1 = require("./SelectaItem");
var Itembox = /** @class */ (function (_super) {
    __extends(Itembox, _super);
    function Itembox(props) {
        return _super.call(this, props) || this;
    }
    Itembox.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: "items" },
            React.createElement("div", { className: "products" }, this.props.items.map(function (item) { return React.createElement(SelectaItem_1.default, { item: item, key: _this.props.items.indexOf(item) }); }))));
    };
    return Itembox;
}(React.Component));
exports.default = Itembox;
//# sourceMappingURL=Itembox.js.map