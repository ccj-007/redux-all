# redux 可预测化的状态管理

store   dispatch 传入action reducer 纯函数 处理业务逻辑  返回新state， view视图层更新

## 步骤

创建reducer(state, action) 多个reducer combineReducers

创建action, 定义类型。 创建store createStore

通过subscribe订阅，getState获取state树变化，返回的unsubscribe可以取消订阅

## 动机

state复杂  ui状态、分页器、动画效果、model互相嵌套依赖

## 三大原则

单一数据源： 唯一的state tree
state只读： 唯一修改通过action通知
reducer纯函数： reducer一定是纯函数，可控

### Action 指令

通知对应的执行的reducer

Action Creator创建函数  用于返回action，方便测试和移植

Action 类型  action定义的不同type 大项目用常量命名

### Reducer 

reducer 纯函数中一定不能做 1.修改传入的参数 2. 执行api请求、路由跳转 3， 调用非纯函数 Date.now()  Math.random()

多个reducer 拆分   combineReducers 合并

### 异步Action数据流

redux设计核心是单向数据流

通过action creator 创建请求成功、请求失败、请求开始，state存储loading、error、success, 异步需要中间件redux-thunk

## Middleware 

React redux 对异步一无所知， 同步执行的过程，需要中间件扩展获取日志、异步。来支持异步请求返回数据后再reducer


## react-redux redux-toolkit

`react-redux` 容器组件和ui组件

1. toolkit的configureStore创建store，接受reducer
2. Provider挂载store
3. createSlice切片创建reducer
4. useSelector/useDispatch  `react-redux`
5. connect(mapStateToProps, mapDispatchToProps)(MyComponent) `react-redux`

`redux-toolkit` 工具集

`configureStore()`：封装了createStore，简化配置项，提供一些现成的默认配置项。它可以自动组合 slice 的 reducer，可以添加任何 Redux 中间件，默认情况下包含 redux-thunk，并开启了 Redux DevTools 扩展。
`createReducer()` 帮你将 action type 映射到 reducer 函数，而不是编写 switch...case 语句。另外，它会自动使用 immer 库来让你使用普通的 mutable 代码编写更简单的 immutable 更新，例如 state.todos[3].completed = true。
`createAction()` 生成给定 action type 字符串的 action creator 函数。该函数本身已定义了 toString()，因此可以代替常量类型使用。
`createSlice()` 接收一组 reducer 函数的对象，一个 slice 切片名和初始状态 initial state，并自动生成具有相应 action creator 和 action type 的 slice reducer。
`createAsyncThunk`: 接收一个 action type 字符串和一个返回值为 promise 的函数, 并生成一个 thunk 函数，这个 thunk 函数可以基于之前那个 promise ，dispatch 一组 type 为 pending/fulfilled/rejected 的 action。
`createEntityAdapter`: 生成一系列可复用的 reducer 和 selector，从而管理 store 中的规范化数据。
`createSelector` 来源于 Reselect 库，重新 export 出来以方便使用。

RTK的查询

Redux Toolkit优点：

Redux Toolkit已经集成了redux-devtools-extension，不需要额外配置，非常方便。

Redux Toolkit已经集成了immutable-js的功能，不需要我们额外安装配置使用，大大提升了开发效率。

Redux Toolkit已经集成了redux-thunk的功能，不需要我们额外安装配置使用，大大提升了开发效率。

Redux Toolkit将types、actions、reducers放在了一起组成全新的slices一目了然简单易懂，简化了我们的使用。
