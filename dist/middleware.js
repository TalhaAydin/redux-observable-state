"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createObservable = void 0;
var rxjs_1 = require("rxjs");
/**
 * Creates the Redux middleware and the RxJS observable.
 *
 * @param rootReducer - The root reducer you pass to Redux.
 *
 * @public
 */
var createObservable = function (rootReducer) {
    var _subject = new rxjs_1.BehaviorSubject(rootReducer(undefined, { type: '@redux-observable-state/init' }));
    var state$ = _subject.asObservable();
    var middleware = function (_a) {
        var getState = _a.getState;
        return function (next) {
            return function (action) {
                var before = getState();
                next(action);
                var after = getState();
                if (after !== before)
                    _subject.next(after);
            };
        };
    };
    return {
        state$: state$,
        middleware: middleware,
    };
};
exports.createObservable = createObservable;
