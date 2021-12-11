import React from "react";
import ReactDOM from "react-dom";
import Test from "./App";
import "./index.css";

// const element = <h1 className="test">Hello World!</h1>;

// const elementTwo = React.createElement(
//   "h1",
//   { className: "test" },
//   "Hello, World!"
// );

ReactDOM.render(
  <React.StrictMode>
    <Test />
  </React.StrictMode>,
  document.getElementById("root")
);

// ReactDOM.render(elementTwo, document.getElementById("root"));
