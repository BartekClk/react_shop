import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../../context/shop-context";

export const Product = (props) => {
  const { id, productName, price, productImageSRC } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const [cartItemCount, setCartItemCount] = useState(0);
    useEffect(() => {
      if (cartItems.find((item) => item.id === id)) {
        setCartItemCount(cartItems.find((item) => item.id === id).amount);
      }
    }, [cartItems]);
  return (
    <div className="product col">
      <img src={require("../../assets/img/"+productImageSRC)} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p> {price}zł</p>
      </div>
      <button className="addToCartBttn btn btn-dark" onClick={() => addToCart(id)}>
        Dodaj do koszyka {cartItemCount > 0 && <> ({cartItemCount})</>}
      </button>
    </div>
  );
};