// import { type } from "os";
import React from "react";

type ProductCounterProductType = {
  product: {
    productName: string;
    count?: number;
  };
};
const ProductCounter: React.FC<ProductCounterProductType> = (props) => {
  const {
    product: { productName, count = "No information" },
  } = props;
  return (
    <div className="product_counter">
      <h1>{productName}</h1>
      <span>{count}</span>
    </div>
  );
};

export default ProductCounter;
