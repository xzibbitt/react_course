// import { type } from "os";
import React from "react";
import ProductCount from "./ProductCount";

type ProductCounterProductType = {
  productName: string;
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
};
const ProductCounter: React.FC<ProductCounterProductType> = (props) => {
  const { productName, count, setCount } = props;

  const addHandler = () => {
    setCount((prev) => prev + 1);
  };

  const deleteHandler = () => {
    setCount((prev) => prev - 1);
  };

  console.log("render");

  return (
    <div className="product_counter">
      <h1>{productName}</h1>
      <ProductCount count={count} />
      <button onClick={addHandler} type="button">
        Add
      </button>
      <button onClick={deleteHandler} type="button">
        Remove
      </button>
    </div>
  );
};

export default ProductCounter;
