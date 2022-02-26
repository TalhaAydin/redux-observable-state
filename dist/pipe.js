"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.current = exports.select = void 0;
var rxjs_1 = require("rxjs");
/**
 * An RxJS pipe that returns a part of the state.
 *
 * @param selector - The selector function to apply to the state.
 * @param isEqual - Checks equality of previous and current selected values.
 *
 * @returns An observable that emits tuples with the previous and current
 * selected values. It only emits when the selected value has changed.
 *
 * @public
 */
var select = function (selector, isEqual) {
    if (isEqual === void 0) { isEqual = function (s1, s2) { return s1 === s2; }; }
    return (0, rxjs_1.pipe)((0, rxjs_1.map)(selector), (0, rxjs_1.pairwise)(), (0, rxjs_1.filter)(function (_a) {
        var prev = _a[0], curr = _a[1];
        return !isEqual(curr, prev);
    }));
};
exports.select = select;
/**
 * An RxJS pipe that selects the current state.
 *
 * @returns An observable that emits the second values of the source
 * observable's tuples.
 *
 * @public
 */
var current = function () { return (0, rxjs_1.pipe)((0, rxjs_1.map)(function (_a) {
    var _ = _a[0], curr = _a[1];
    return curr;
})); };
exports.current = current;
