// 引入核心库
import React from "react";
// 引入dom库
import ReactDOM from "react-dom";

// 引入要渲染的组件
import App from "./App";

// 执行渲染函数
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
