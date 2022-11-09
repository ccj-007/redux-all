import React from 'react';
import { useSelector, useDispatch, connect } from 'react-redux';
import { counterSlice } from './rr-counterSlice';

function ReactRedux(state) {
  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => { state.increment() }}
        >
          Increment
        </button>
        <span>{state.counter.value}</span>
        <button
          aria-label="Decrement value"
          onClick={state.decrement}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default connect(
  state => state,
  counterSlice.actions
)(ReactRedux)
