import * as React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
// import Footer from "../Footer/Footer";
import Home from "../Home/Home";
import ProductDetail from "../ProductDetail/ProductDetail";
// import ProductGrid from "../ProductGrid/ProductGrid";
import NotFound from "../NotFound/NotFound";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import ProductCard from "../ProductCard/ProductCard";

export default function App() {
  const [products, setProducts] = useState([]);
  const [isFeteching, setisFetching] = useState(false);
  const [error, setError] = useState();
  const [isOpen, setisOpen] = useState();
  const [shoppingCart, setShoppingCart] = useState([]);
  const [checkoutForm, setcheckoutForm] = useState();

  const url = "https://codepath-store-api.herokuapp.com/store";

  useEffect(() => {
    async function getProds() {
      try {
        const response = await axios.get(url);
        console.log("response", response);

        setProducts(response.data.products);
        console.log(products);
      } catch (error) {
        console.error(error);
      }
    }

    getProds();
  }, []);
  // function handleAddItemToCart(productId) {}
  // const productt = shoppingCart.products.find(
  //   (prod) => prod.id === productId
  // );
  // if (productt) {
  //   setShoppingCart(
  //     shoppingCart.map((productt) =>
  //       productt.id === productId
  //         ? { ...productt, quantity: productt.quantity }
  //         : prod
  //     )
  //   );
  // } else {
  //   setShoppingCart([...shoppingCart, { ...productId, quantity: 1 }]);
  // }

  //     };
  //   if (productId(!shoppingCart)) quantity = 1;
  //   else quantity += 1;

  // function handleRemoveItemFromCart(productId) {}
  function handleOnCheckoutFormChange(names, values) {
    let profileinfo = {
      name: names,
      value: values,
    };
    setcheckoutForm(profileinfo);
  }
  // function handleOnSubmitCheckoutForm() {}

  // // var shoppingCart={
  //   id: itemId
  //   quantity: 0

  // }

  return (
    <div className="app">
      <BrowserRouter>
        <main>
          {/* YOUR CODE HERE! */}

          <Routes>
            <Route
              path="/"
              element={
                <Home
                  products={products}
                  // shoppingCart={shoppingCart}
                  // handleAddItemToCart={handleAddItemToCart}
                  // handleRemoveItemFromCart={handleRemoveItemFromCart}
                />
              }
            />
            <Route
              path="/products/:productId"
              element={
                <ProductDetail
                // shoppingCart={shoppingCart}
                // handleAddItemToCart={handleAddItemToCart}
                // handleRemoveItemFromCart={handleRemoveItemFromCart}
                />
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </BrowserRouter>
      <Home />
    </div>
  );
}
