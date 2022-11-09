import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import rootSaga from './sagaAsync'

const sagaMiddleware = createSagaMiddleware()

const countReducer = (state = {count: 0}, action: any) => {
  switch(action.type) {
    case 'INCREMENT': return {count: state.count + 2}
    case 'DECREMENT': return {count: state.count - 2}
    default: return state
  }
}

export const store = createStore(
  countReducer,
  applyMiddleware(sagaMiddleware)
)

export const action = type => {
  store.dispatch({type})
}

sagaMiddleware.run(rootSaga)