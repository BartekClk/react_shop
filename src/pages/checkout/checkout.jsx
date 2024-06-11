import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../../products";

export const Checkout = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const products = PRODUCTS();

  return (
    <div className="container-md" >
        <h1 className="text-center mt-2" >Podsumowanie zamówienia</h1>
        <div>
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Przedmiot</th>
                    <th scope="col">Cena</th>
                    <th scope="col">Ilość</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cartItems.map((item, index) => {
                            const product = products.find(product => product.id === item.id);
                            if (product) {
                                return (
                                    <tr key={item.id} >
                                        <th scope="row">{index + 1}</th>
                                        <td>{product.productName}</td>
                                        <td>{product.price}zł</td>
                                        <td>{item.amount}</td>
                                    </tr>
                                )
                            }
                        })
                    }
                    <tr>
                    <th scope="row"></th>
                    <td colSpan="3">Kwota zamównienia: {totalAmount}zł</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  );
};