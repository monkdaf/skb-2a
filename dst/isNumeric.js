"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isNumeric;
//export const isNumeric = num => !isNaN(parseFloat(num)) && isFinite(num);
function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}