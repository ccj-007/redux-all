import React from 'react'
import { store, action } from "./saga-main";

export default function Saga() {
  return (
    <div>
      <button onClick={() => action('ADD_ASYNC')}>
        Increment after 1 second
      </button>
      {' '}
      <button onClick={() => action('INCREMENT')}>
        Increment
      </button>
      {' '}
      <button onClick={() => action('DECREMENT')}>
        Decrement
      </button>
      <button onClick={() => action('PRODUCTS_REQUESTED')}>
        Effects
      </button>
      <hr />
      <div>
        Clicked: <>{store.getState().count} </>times
      </div>
    </div >
  )
}
