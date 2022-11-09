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
<<<<<<< HEAD
=======

## Middleware 

React redux 对异步一无所知， 同步执行的过程，需要中间件扩展获取日志、异步。来支持异步请求返回数据后再reducer


>>>>>>> bb826adae269725d02347681c63cd773550a48e8
