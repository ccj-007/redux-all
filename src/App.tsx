import React from 'react';
import './App.css';
import ReduxTest from "./redux/ReduxTest";
import Toolkit from "./react-toolkit/Toolkit";
import Saga from "./redux-saga/Saga";
import ReactRedux from "./react-redux/ReactRedux";
// import Dva from "./dva/Dva";
// import { Route } from "react-router";
import Mobxx from "./mobx/Mobxx";

const App = () => {
  return (
    <div className="App">
      {/* <Route path="/products" exact component={Dva} /> */}
      {/* <ReduxTest></ReduxTest> */}
      {/* <Toolkit></Toolkit> */}
      {/* <ReactRedux></ReactRedux> */}
      {/* <Saga /> */}
      <Mobxx></Mobxx>
    </div>
  );
}

export default App;
