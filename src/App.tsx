import React from 'react';
import './App.css';
import ReduxTest from "./redux/ReduxTest";
import Toolkit from "./react-toolkit/Toolkit";
import Saga from "./redux-saga/Saga";
import { store, action } from "./redux-saga/saga-main";
import ReactRedux from "./react-redux/ReactRedux";

const App = () => {
  return (
    <div className="App">
      {/* <ReduxTest></ReduxTest> */}
      {/* <Toolkit></Toolkit> */}
      <ReactRedux></ReactRedux>
      {/* <Saga
        value={store.getState()}
        onIncrement={() => action('ADD')}
        onDecrement={() => action('DEL')}
        onIncrementAsync={() => action('ADD_ASYNC')} /> */}
    </div>
  );
}

export default App;
