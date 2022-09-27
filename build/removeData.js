"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeData = void 0;
function removeData(valueStock, stock) {
    var value = stock.indexOf(valueStock);
    stock.splice(value, 1);
}
exports.removeData = removeData;
