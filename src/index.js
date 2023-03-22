import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
reportWebVitals();
let root;
function render(props = {}) {
  let { container } = props;
  root = ReactDOM.createRoot(
    container
      ? container.querySelector("#root")
      : document.getElementById("root")
  );
  root.render(<App />);
}
// 独立运行
if (!window.__POWERED_BY_QIANKUN__) {
  render({});
}
export async function bootstrap(props) {
  console.log(1);
}

export async function mount(props) {
  console.log(2);
  // 如果没传props,会样式丢失掉!
  render(props);
}

export async function unmount(props) {
  let { container } = props;
  // react17的!!! (已被弃用,但是依然可以从reactdom包里导入)
  // ReactDOM.unmountComponentAtNode(
  //   container ? container.querySelector('#root') : document.getElementById('root')
  // )
  // react18!!!
  root.unmount(
    container
      ? container.querySelector("#root")
      : document.getElementById("root")
  );
}
