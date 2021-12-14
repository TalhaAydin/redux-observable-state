export declare const select: <T, S>(selector: (state: S) => T, isEqual?: ((s1: T, s2: T) => boolean) | undefined) => import("rxjs").UnaryFunction<import("rxjs").Observable<S>, import("rxjs").Observable<[T, T]>>;
export declare const current: <T>() => import("rxjs").UnaryFunction<import("rxjs").Observable<[T, T]>, import("rxjs").Observable<T>>;
