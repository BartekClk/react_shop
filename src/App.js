import "./App.css";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Shop} from "./pages/shop/shop";
import {Cart} from "./pages/cart/cart";
import {ShopContextProvider} from "./context/shop-context";
import WebsiteLayout from "./components/WebsiteLayout";
import { Checkout } from "./pages/checkout/checkout";


const router = createBrowserRouter([
  {element: <WebsiteLayout/>,
  children: [
    {path: "/", element: <Shop/>},
    {path: "/cart", element: <Cart/>},
    {path: "/checkout", element: <Checkout/>},
    ],
  }
]);
function App() {
  return(
    <ShopContextProvider>
      <RouterProvider router={router}/>;
    </ShopContextProvider>
  )
}

export default App;