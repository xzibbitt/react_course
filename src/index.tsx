import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

// const element = <h1 className="test">Hello World!</h1>;

// const elementTwo = React.createElement(
//   "h1",
//   { className: "test" },
//   "Hello, World!"
// );

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// ReactDOM.render(elementTwo, document.getElementById("root"));
