import { inject, observer } from 'mobx-react';
import * as React from "react"
import Store from './mobx';
import { makeAutoObservable } from "mobx"
// props要接受的值
interface IProps {
  store?: Store;
}

@inject("store") // 将store注入
@observer   // 将Casual类转化为观察者，只要被观察者跟新，组件将会刷新
//@ts-ignore
class Mobxx extends React.Component<IProps, {}> {
  public onClickAdd = () => {
    this.props.store.add()
  };

  public render() {
    return (
      <div>
        <h1>{this.props.store!.num}</h1>
        <h2>{this.props.store!.retunum}</h2>
        <h2>{this.props.store!.addNum}</h2>
        <button onClick={this.onClickAdd}>增加num</button>
      </div>
    )
  }



}
export default Mobxx
