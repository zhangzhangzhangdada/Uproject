import React from "react";
//调用仓库
import Store from "../store";
import "../App.css";
class Home extends React.Component {
  componentDidMount(){
    //调用一个订阅者，当数据发生变化，我们可以实时监听
    Store.subscribe(()=>{
      this.setState({})
    })
  }
  //封装一个修改函数
  changeMsg(){
    console.log('被触发。。。。')
    Store.dispatch({
      type:'CHANGE_MSG'
    })
  }
  render() {
    console.log(Store, "？？？");
    return (
      <div className="box">
        <h1>组件一</h1>
        <h2>接收到仓库的数据----{Store.getState().msg}</h2>
        <button onClick={this.changeMsg.bind(this)}>阿巴阿巴</button>
      </div>
    );
  }
}
export default Home;
