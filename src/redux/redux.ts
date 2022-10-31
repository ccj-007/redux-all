
import { createStore, combineReducers } from "redux";

const countActions = {
  add: () => ({type: 'ADD'}),
  del: () => ({type: 'DEL'})
}
const count2Actions = {
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
const store = createStore(combineStore)

const unsubscribe  = store.subscribe(() => {
  console.log(store.getState());
})

store.dispatch(countActions.add())
store.dispatch(countActions.del())
store.dispatch(count2Actions.add())
store.dispatch(count2Actions.del())

//停止监听state更新
unsubscribe()
