import { AnyAction, Middleware, Reducer } from 'redux';
/**
 * Creates the Redux middleware and the RxJS observable.
 *
 * @param rootReducer - The root reducer you pass to Redux.
 *
 * @public
 */
export declare const createObservable: <T>(rootReducer: Reducer<T, AnyAction>) => {
    state$: import("rxjs").Observable<T>;
    middleware: Middleware<{}, T, import("redux").Dispatch<AnyAction>>;
};
//# sourceMappingURL=middleware.d.ts.map