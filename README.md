# `redux-observable-state`

Creates an RxJS observable that emits the latest Redux state any time any
action changes it.

## Usage

Install the package:

```
npm install redux-observable-state
```

Create the needed variables:

```
import { createObservable } from 'redux-observable-sate'

export const { state$, middleware } = createObservableState(rootReducer)
```

After connecting `middleware` to Redux, you can subscribe to the `state$`
observable.
