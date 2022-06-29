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
  const [isOpen, setisOpen] = useState(false);
  const [shoppingCart, setShoppingCart] = useState([]);
  const [checkoutForm, setcheckoutForm] = useState(null);
  const [quantity, setquantity] = useState(0);

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

  function handleOnToggle() {
    setisOpen(!isOpen);
    console.log(handleOnToggle);
  }

  function handleAddItemToCart(productId) {
    let productt = shoppingCart.find((prods) => prods.id === productId);
    {
      shoppingCart.map((productt) => {
        if (productt(shoppingCart)) {
          quantity = 1;
          setShoppingCart(productt);
        } else {
          setquantity(quantity + 1);
        }
      });
    }
  }

  function handleRemoveItemToCart(productId) {
    let productt = shoppingCart.find((prods) => prods.id === productId);
    {
      shoppingCart.map((productt) => {
        if (productt(shoppingCart)) {
        } else {
          setquantity(quantity - 1);
        }
      });
    }
  }

  function handleOnCheckoutFormChange(names, email) {
    let profileinfo = {
      name: names,
      value: email,
    };
    setcheckoutForm(profileinfo);
  }
  async function handleOnSubmitCheckoutForm(checkoutForm, shoppingCart) {
    const response = axios.post(
      "https://codepath-store-api.herokuapp.com/store",
      {
        profile: checkoutForm,
        shoppingCart: shoppingCart,
      }
    );
  }

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
                  shoppingCart={shoppingCart}
                  handleAddItemToCart={handleAddItemToCart}
                  handleRemoveItemToCart={handleRemoveItemToCart}
                />
              }
            />
            <Route
              path="/products/:productId"
              element={
                <ProductDetail
                  shoppingCart={shoppingCart}
                  handleAddItemToCart={handleAddItemToCart}
                  handleRemoveItemToCart={handleRemoveItemToCart}
                />
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>

          <Sidebar
            isOpen={isOpen}
            shoppingCart={shoppingCart}
            quantity={quantity}
            products={products}
            checkoutForm={checkoutForm}
            handleOnCheckoutFormChange={handleOnCheckoutFormChange}
            handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm}
            handleOnToggle={handleOnToggle}
          />
        </main>
      </BrowserRouter>
      {/* <Home /> */}
    </div>
  );
}
