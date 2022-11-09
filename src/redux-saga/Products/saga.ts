import { put, takeEvery, all, call } from "redux-saga/effects";
import assert from "assert";

function getProductsList() {
  return new Promise((resolve, reject) => {
    fetch('http://localhost:3001/api/setData', {
      headers: {
        'content-type': 'application/json'
      },
      method:"POST",
      body: JSON.stringify({
        add: 1
      })
    })
  .then(response => response.json())
  .then(data => resolve(data));
  })
}


function* fetchProducts() {
  //@ts-ignore
  const products = yield call(getProductsList, './products')
  yield put({ type: 'PRODUCTS_RECEIVED', products })
  console.log(products)
}

export function* watchFetchProducts() {
  yield takeEvery('PRODUCTS_REQUESTED', fetchProducts)
}


/**
 * test
 */
// const iterator = fetchProducts()

// // expects a call instruction
// assert.deepEqual(
//   iterator.next().value,
//   //@ts-ignore
//   call(getProductsList, './products'),
//   "fetchProducts should yield an Effect call(Api.fetch, './products')"
// )