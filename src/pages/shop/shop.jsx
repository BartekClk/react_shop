import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./shop.css";

export const Shop = () => {
  const products = PRODUCTS(); // Call the function to get the array of products
  return (
    <div className="shop">
      <div className="d-flex products row">
        {products.map((product) => ( // Use the products array
          <Product key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
};