import { filter, map, pairwise, pipe } from 'rxjs'

export const select = <T, S>(
  selector: (state: S) => T,
  isEqual?: (s1: T, s2: T) => boolean
) =>
  pipe(
    map(selector),
    pairwise(),
    filter(([prev, curr]) => (isEqual && !isEqual(curr, prev)) || curr !== prev)
  )

export const current = <T>() => pipe(map<[T, T], T>(([_, curr]) => curr))
