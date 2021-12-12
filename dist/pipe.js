"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.current = exports.select = void 0;
var rxjs_1 = require("rxjs");
var select = function (selector, isEqual) {
    return (0, rxjs_1.pipe)((0, rxjs_1.map)(selector), (0, rxjs_1.pairwise)(), (0, rxjs_1.filter)(function (_a) {
        var prev = _a[0], curr = _a[1];
        return (isEqual && !isEqual(curr, prev)) || curr !== prev;
    }));
};
exports.select = select;
var current = function () { return (0, rxjs_1.pipe)((0, rxjs_1.map)(function (_a) {
    var _ = _a[0], curr = _a[1];
    return curr;
})); };
exports.current = current;
