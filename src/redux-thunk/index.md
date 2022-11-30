```js
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

const store = createStore(
    reducers, 
    applyMiddleware(thunk)
);
```
## redux-thunk

让dispatch可以通过函数来调用来触发

```js
function createThunkMiddleware(extraArgument) {
  return ({ dispatch, getState }) => next => action => {
    if (typeof action === 'function') {
      return action(dispatch, getState, extraArgument);
    }
    return next(action);
  };
}
const thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;
export default thunk;
```

```js
const thunk = ({ dispatch, getState }) => (next) => (action) => {
  if (typeof action === 'function') {
    return action(dispatch, getState);
  }

  return next(action);
};
export default thunk

```