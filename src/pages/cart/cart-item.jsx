import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const CartItem = (props) => {
  const { id, productName, price, productImageSRC } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  return (
    <div className="cartItem d-flex align-items-center justify-content-center">
      <img className="m-3" src={require("../../assets/img/"+productImageSRC)} />
      <div className="description me-5">
        <h3 className="mb-3" >{productName}</h3>
        <h5> Cena: {price}zł</h5>
        <div className="countHandler">
          <button className="btn btn-dark me-1" onClick={() => removeFromCart(id)}> - </button>
          <input
            value={cartItems.find((item) => item.id === id).amount}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <button className="btn btn-dark ms-1"  onClick={() => addToCart(id)}> + </button>
        </div>
      </div>
    </div>
  );
};