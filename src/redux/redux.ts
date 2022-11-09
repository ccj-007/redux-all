
import { createStore, combineReducers, applyMiddleware, compose } from "redux";

/**
 * 打印每个 dispatch 的 action 和调用后的状态日志
 */
 const logger = (store: { getState: () => any; }) => (next: (arg0: { type: any; }) => any) => (action: { type: any; }) => {
  console.group(action.type)
  console.info('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  console.groupEnd()
  return result
}

export const countActions = {
  add: () => ({type: 'ADD'}),
  del: () => ({type: 'DEL'})
}
export const count2Actions = {
  add: () => ({type: 'ADD'}),
  del: () => ({type: 'DEL'})
}

const countReducer = (state = {count: 0}, action: any) => {
  switch(action.type) {
    case 'ADD': return {count: state.count + 1}
    case 'DEL': return {count: state.count - 1}
    default: return state
  }
}

const count2Reducer = (state = {count: 0}, action: any) => {
  switch(action.type) {
    case 'ADD': return {count: state.count + 2}
    case 'DEL': return {count: state.count - 2}
    default: return state
  }
}

const combineStore = combineReducers({
  count2Reducer,
  countReducer
})

//@ts-ignore
export const store = createStore(combineStore, compose(applyMiddleware(logger,)))

const unsubscribe  = store.subscribe(() => {
  console.log(store.getState());
})

// store.dispatch(countActions.add())
// store.dispatch(countActions.del())
// store.dispatch(count2Actions.add())
// store.dispatch(count2Actions.del())

//停止监听state更新
unsubscribe()
