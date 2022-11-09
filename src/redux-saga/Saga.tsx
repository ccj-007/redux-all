import React from 'react'

export default function Saga({ value, onIncrement, onDecrement, onIncrementAsync }) {
  return (
    <div>
      <button onClick={onIncrementAsync}>
        Increment after 1 second
      </button>
      {' '}
      <button onClick={onIncrement}>
        Increment
      </button>
      {' '}
      <button onClick={onDecrement}>
        Decrement
      </button>
      <hr />
      <div>
        Clicked: <>{value.count} </>times
      </div>
    </div >
  )
}
