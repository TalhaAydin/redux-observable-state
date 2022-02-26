import { filter, map, pairwise, pipe } from 'rxjs'

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
export const select = <T, S>(
  selector: (state: S) => T,
  isEqual: (s1: T, s2: T) => boolean = (s1, s2) => s1 === s2
) =>
  pipe(
    map(selector),
    pairwise(),
    filter(([prev, curr]) => !isEqual(curr, prev))
  )

/**
 * An RxJS pipe that selects the current state.
 *
 * @returns An observable that emits the second values of the source
 * observable's tuples.
 *
 * @public
 */
export const current = <T>() => pipe(map<[T, T], T>(([_, curr]) => curr))
