import React from "react";
import "./App.css";
import ProductCounter from "./ProductCounter";

const App = () => {
  return (
    <div className="App">
      <ProductCounter product={{ productName: "Orange", count: 9 }} />
      <ProductCounter product={{ productName: "Apple" }} />
      <ProductCounter product={{ productName: "Pineapple", count: 2 }} />
      <ProductCounter product={{ productName: "Melon" }} />
      <ProductCounter product={{ productName: "Blueberry", count: 11 }} />
    </div>
  );
};

export default App;
