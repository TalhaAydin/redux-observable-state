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
export declare const select: <T, S>(selector: (state: S) => T, isEqual?: (s1: T, s2: T) => boolean) => import("rxjs").UnaryFunction<import("rxjs").Observable<S>, import("rxjs").Observable<[T, T]>>;
/**
 * An RxJS pipe that selects the current state.
 *
 * @returns An observable that emits the second values of the source
 * observable's tuples.
 *
 * @public
 */
export declare const current: <T>() => import("rxjs").UnaryFunction<import("rxjs").Observable<[T, T]>, import("rxjs").Observable<T>>;
//# sourceMappingURL=pipe.d.ts.map