import { createContext, useEffect, useState } from "react";
import { PRODUCTS } from "../products";

export const ShopContext = createContext(null);


export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);

  const getTotalCartAmount = () => {
    const products = PRODUCTS();
    let totalAmount = 0;
    cartItems.map((item)=>{
      if(products.find((product) => product.id === item.id)){
        totalAmount += item.amount * products.find((product) => product.id === item.id).price;
      }
    })
    return totalAmount;
  };

  const addToCart = (itemId) => {
    setCartItems((prevItems) => {
      // Check if the item already exists in the cart
      const itemExists = prevItems.find((item) => item.id === itemId);

      if (itemExists) {
        // Map over the items and update the amount of the existing item
        return prevItems.map((item) =>
          item.id === itemId ? { ...item, amount: item.amount + 1 } : item
        );
      } else {
        // If the item does not exist, add it to the cart
        return [...prevItems, { id: itemId, amount: 1 }];
      }
    });
    console.log(cartItems);
  };

  const removeFromCart = (itemId) => {
    setCartItems((prevItems) => {
      const itemExists = prevItems.find((item) => item.id === itemId);

      if (itemExists) {
        return prevItems
          .map((item) =>
            item.id === itemId ? { ...item, amount: item.amount - 1 } : item
          )
          .filter((item) => item.amount > 0);
      }

      return prevItems;
    });
  };

  const updateCartItemCount = (itemId, newCount) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, amount: newCount } : item
      )
    );
  };

  const checkout = () => {
    // setCartItems(getDefaultCart());
  };

  const contextValue = {
    cartItems,
    addToCart,
    updateCartItemCount,
    removeFromCart,
    getTotalCartAmount,
    checkout,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};