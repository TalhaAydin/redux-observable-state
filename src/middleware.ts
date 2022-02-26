import { AnyAction, Middleware, Reducer } from 'redux'
import { BehaviorSubject } from 'rxjs'

/**
 * Creates the Redux middleware and the RxJS observable.
 *
 * @param rootReducer - The root reducer you pass to Redux.
 *
 * @public
 */
export const createObservable = <T>(rootReducer: Reducer<T>) => {
  const _subject = new BehaviorSubject(
    rootReducer(undefined, { type: '@redux-observable-state/init' })
  )
  const state$ = _subject.asObservable()

  const middleware: Middleware<{}, T> =
    ({ getState }) =>
    (next) =>
    (action: AnyAction) => {
      const before = getState()
      next(action)
      const after = getState()
      if (after !== before) _subject.next(after)
    }

  return {
    state$,
    middleware,
  }
}
