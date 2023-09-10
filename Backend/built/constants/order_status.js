"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderStatus = void 0;
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["NEW"] = "NEW";
    OrderStatus["PAYED"] = "PAYED";
    OrderStatus["SHIPPED"] = "SHIPPED";
    OrderStatus["CANCELED"] = "CANCELED";
    OrderStatus["REFUNDED"] = "REFUNDED";
})(OrderStatus || (exports.OrderStatus = OrderStatus = {}));
