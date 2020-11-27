import React from "react";
import Store, { getStateMsg, getStateNum,changNumAction } from "../store";
import "../App.css";
class Home extends React.Component {
  componentDidMount() {
    Store.subscribe(() => {
      this.setState({});
    });
  }
  //修改num
  changeNum(payload){
    //   Store.dispatch({
    //       type:'CHANGE_NUM',
    //       payload
    //   })
    Store.dispatch(changNumAction(payload))
  }
  render() {
    console.log(getStateMsg(), "getStateMsg");
    return (
      <div className="box">
        <h1>组件2222222222</h1>
        <h2>接收到的数据是=---==={Store.getState().msg}</h2>
        <h3>接收封装好的state导出数据---{getStateMsg()}</h3>
        <hr />
        {/* 获取num */}
        <button onClick={this.changeNum.bind(this,5)}>点击我累加5</button>
        <h3>{getStateNum()}</h3>
      </div>
    );
  }
}
export default Home;
