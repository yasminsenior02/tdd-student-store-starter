import * as React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
// import Footer from "../Footer/Footer";
import Home from "../Home/Home";
import ProductDetail from "../ProductDetail/ProductDetail";
import NotFound from "../NotFound/NotFound";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import ProductCard from "../ProductCard/ProductCard";

export default function App() {
  const [products, setProducts] = React.useState([]);
  const [isFeteching, setisFetching] = React.useState(false);
  const [error, setError] = React.useState();
  const [isOpen, setisOpen] = React.useState();
  const [shoppingCart, setShoppingCart] = React.useState([]);
  const [checkoutForm, setcheckoutForm] = React.useState();

  const url = `https://codepath-store-api.herokuapp.com/store`;

  useEffect(async () => {
    await axios
      .get(url)
      .then((response) => {
        setProducts(response.data.products);
        console.log(response.data.products);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  function handleOnToggle() {
    setisOpen(!isOpen);
  }
  function handleAddItemToCart() {
    {
      proudctId;
    }
  }

  function handleRemoveItemFromCart() {}
  function handleOnCheckoutFormChange() {
    let profileinfo = {
      name: names,
      value: values,
    };
    setcheckoutForm(profileinfo);
  }
  function handleOnSubmitCheckoutForm() {}

  // var shoppingCart={
  //   id: itemId
  //   quantity: 0

  // }

  return (
    <div className="app">
      <BrowserRouter>
        <main>
          {/* YOUR CODE HERE! */}

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products/:productId" element={<ProductDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}
