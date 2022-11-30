import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Store from './mobx/mobx';
// import { Provider } from "mobx-react"
// import { Provider } from 'react-redux'
// import { store } from "./react-redux/rr-main";
// import { store } from "./react-toolkit/index";
// import { store } from "./redux-saga/saga-main";
// import { HashRouter } from "react-router-dom";


const store = {
  store: new Store()
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
function render() {
  root.render(
    <React.StrictMode>
      {/* <Provider {...store}> */}
        {/* <HashRouter> */}
        <App />
        {/* </HashRouter> */}
      {/* </Provider> */}
    </React.StrictMode>
  );
}
render()
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// store.subscribe(render)   // redux-saga订阅

