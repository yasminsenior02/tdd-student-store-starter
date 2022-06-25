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
import { useParams } from "react-router-dom";

// import ProductCard from "../ProductCard/ProductCard";

export default function App() {
  const [products, setProducts] = useState([]);
  const [isFeteching, setisFetching] = useState(false);
  const [error, setError] = useState();
  const [isOpen, setisOpen] = useState();
  const [shoppingCart, setShoppingCart] = useState([]);
  const [checkoutForm, setcheckoutForm] = useState(null);

  const url = `https://codepath-store-api.herokuapp.com/store`;

  useEffect(async () => {
    await axios
      .get(url)
      .then((response) => {
        console.log("Response " + response);
        let responseded = response.data;
        setProducts(responseded.products);
        console.log("Response.data " + response.data);
        console.log(responseded);
        // console.log(products);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  // \
  const handleOnToggle = () => {
    setisOpen(!isOpen);
  };

  function handleAddItemToCart(productId) {}
  const productt = shoppingCart.products.find(
    (productt) => productt.id === productId
  );
  shoppingCart.map((productt) => {
    if (productt(!shoppingCart)) quantity = 1;
    else quantity + 1;
    {
      setShoppingCart.concat(productt);
    }
  });

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
            <Route path="navbar" element={<Navbar />} />
            <Route path="sidebar" element={<Sidebar />} />
          </Routes>
        </main>
      </BrowserRouter>
      {/* <Home /> */}
    </div>
  );
}
