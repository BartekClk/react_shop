import { useEffect, useState } from "react";
import productsData from "./assets/products.json";

export const PRODUCTS = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(productsData["products"]);
  }, []);

  return products;
};