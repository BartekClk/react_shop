import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../../products";
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";

import "./cart.css";
export const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const products = PRODUCTS();

  const navigate = useNavigate();

  return (
    <div className="cart">
      <div>
        <h1>Koszyk</h1>
      </div>
      <div className="cart">
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          {
          cartItems.map((item) => (
            <CartItem key={item.id} data={products.find((product) => product.id === item.id)} />
          ))
          }
          <h5> Suma: {totalAmount}zł </h5>
          <button className="btn btn-dark" onClick={() => navigate("/")}> Kontynuuj zakupy </button>
          <button className="btn btn-dark ms-3"
            onClick={() => {
              checkout();
              navigate("/checkout");
            }}
          >
            {" "}
            Przejdź dalej{" "}
          </button>
        </div>
      ) : (
        <h1> Pusto</h1>
      )}
    </div>
  );
};