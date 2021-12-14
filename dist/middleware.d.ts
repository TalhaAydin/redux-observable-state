import { AnyAction, Middleware, Reducer } from 'redux';
export declare const createReduxObservableState: <T>(rootReducer: Reducer<T, AnyAction>) => {
    state$: import("rxjs").Observable<T>;
    middleware: Middleware<{}, T, import("redux").Dispatch<AnyAction>>;
};
