import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()

const countReducer = (state = {count: 0}, action: any) => {
  switch(action.type) {
    case 'ADD': return {count: state.count + 2}
    case 'DEL': return {count: state.count - 2}
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