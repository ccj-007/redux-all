## redux-saga

相比redux更好的异步状态管理， generator函数 yield来暂停状态

过程： 用saga订阅监听render，在createStore中，applyMiddleware使用sagaMiddleware中间件， run(), 传入generate函数， takeEvery来监听action，并触发对应的generate函数异步put派发更新state
