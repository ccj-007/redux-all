import { put, takeEvery, all } from "redux-saga/effects";
import { watchFetchProducts } from "./Products/saga";

const delay = (ms) => new Promise(res => setTimeout(res, ms))

function* helloSaga() {
  console.log('helloSaga');
}

// Our worker Saga: will perform the async increment task
export function* incrementAsync() {
  yield delay(1000)
  yield put({ type: 'ADD' })
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* watchIncrementAsync() {
  yield takeEvery('ADD_ASYNC', incrementAsync)
}

//用于初次执行
export default function* rootSaga() {
  yield all([
    helloSaga(),
    watchIncrementAsync(),
    watchFetchProducts()
  ])
}


