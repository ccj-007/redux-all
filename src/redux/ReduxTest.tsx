import React from 'react'
import { store, countActions } from "./redux";

export default function ReduxTest() {
  const [count, setcount] = React.useState(store.getState().countReducer.count)

  const handleClick = () => {
    store.dispatch(countActions.add())
    setcount(store.getState().countReducer.count)
  }
  return (
    <>
      <div>Redux</div>
      <button onClick={handleClick}>ADD</button>
      <h3>{count}</h3>
    </>
  )
}
