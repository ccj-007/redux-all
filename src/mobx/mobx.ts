import { action, computed, observable, makeAutoObservable } from "mobx"

class Store {
    // 被观察者，你可以理解成Vuex中的State，也就是说，声明一些想要观察的状态，变量。
    // 被观察者可以是：JS基本数据类型、引用类型、普通对象、类实例、数组和映射
    public num: number = 0;
    public map: Map<string,object> = new Map();
    public list: string[] = ["a","b"];
    public obj: object = {name:"Mobx"};
    name;
    constructor(){
        makeAutoObservable(this)
    }


    // 计算值是可以根据现有的状态或其它计算值衍生出的值.
    // 计算值不接受参数
    @computed
    public get retunum() {
        return `${this.num}~~~~~~~~`
    }

    @computed
    public get addNum() {
        return this.num + 10;
    }

    // 使用@action 更改被观察者
    @action
    public add = () => {
      console.log(this.num);
      
        this.num++;

      console.log(this.num);
    }


}
export default Store

