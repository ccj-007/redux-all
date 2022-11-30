import React from 'react';
import './App.css';
import ReduxTest from "./redux/ReduxTest";
import Toolkit from "./react-toolkit/Toolkit";
import Saga from "./redux-saga/Saga";
import ReactRedux from "./react-redux/ReactRedux";
// import Dva from "./dva/Dva";
// import { Route } from "react-router";
import Mobxx from "./mobx/Mobxx";
import Dialog from "./dialog/Dialog";

const App = () => {
  const [isShowDialog, setIsShowDialog] = React.useState(false);
  const toggleDialog = () => {
    setIsShowDialog(!isShowDialog);
  }
  const closeDialog = () => {
    setIsShowDialog(false);
  }
  const onSure = () => {
    console.log('确定...');
    setTimeout(() => {
      setIsShowDialog(false);
    }, 2000);
  }

  return (
    <div className="App">
      <button onClick={toggleDialog}>使用弹窗类组件</button>
      {
        isShowDialog
        && <Dialog
          title="这是标题"
          dialogWidth='80%'
          onCancle={closeDialog}
          onOk={onSure}
          cancelText="残忍离开"
          sureText="我再想想"
        >
          <div className='dialog-content'>具体内容请写在这里...</div>
        </Dialog>}
      {/* <Route path="/products" exact component={Dva} /> */}
      {/* <ReduxTest></ReduxTest> */}
      {/* <Toolkit></Toolkit> */}
      {/* <ReactRedux></ReactRedux> */}
      {/* <Saga /> */}
      {/* <Mobxx></Mobxx> */}
    </div>
  );
}

export default App;
