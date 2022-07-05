import * as React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
// import Footer from "../Footer/Footer";
import Home from "../Home/Home";
import ProductDetail from "../ProductDetail/ProductDetail";
import ProductCard from "../ProductCard/ProductCard";
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
  const [subtotal, setSubtotal] = useState(0);
  const [shoppingCart, setShoppingCart] = useState([]);
  const [checkoutForm, setcheckoutForm] = useState(null);

  // const [quantity, setquantity] = useState(0);

  const url = `http://localhost:3001/store`;

  useEffect(async () => {
    await axios
      .get(url)
      .then((response) => {
        //    console.log("Response ", response);
        let responseded = response.data;
        setProducts(responseded);
        //     console.log("Response.data " + response.data);
        //     console.log(responseded);

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

  const handleAddItemToCart = (productId) => {
    var newItem;
    var newCart = [];

    for (var i = 0; i < shoppingCart.length; i++) {
      if (shoppingCart[i].itemId === productId) {
        shoppingCart[i].quantity++;
        setShoppingCart([...shoppingCart]);
        var tempPrice =
          products.find((item) => item.id === productId).price + subtotal;
        setSubtotal(tempPrice);
        //     console.log(shoppingCart);

        return;
      }
    }
    newItem = {
      itemId: productId,
      quantity: 1,
    };
    setShoppingCart([newItem, ...shoppingCart]);
    // var tempPrice =
    //   products.find((item) => item.id === productId).price + subtotal;
    var tempPrice = products.find((item) => item.id === productId)
      ? products.find((item) => item.id === productId).price + subtotal
      : null;
    // console.log(shoppingCart);
    setSubtotal(tempPrice);
  };

  const handleRemoveItemToCart = (productId) => {
    var newItem;
    var newCart = [];

    for (var i = 0; i < shoppingCart.length; i++) {
      if (shoppingCart[i].itemId === productId) {
        if (shoppingCart[i].quantity != 1) {
          shoppingCart[i].quantity--;
          setShoppingCart([...shoppingCart]);
          var tempPrice =
            subtotal - products.find((item) => item.id === productId).price;
          setSubtotal(tempPrice);
          return;
        } else {
          shoppingCart.splice(i, 1);
          setShoppingCart([...shoppingCart]);
          var tempPrice =
            subtotal - products.find((item) => item.id === productId).price;
          setSubtotal(tempPrice);
          return;
        }
      }
    }
  };

  function handleOnCheckoutFormChange(name, value) {
    //   let profileinfo = {
    //     name: names,
    //     value: email,
  }
  //   setcheckoutForm(profileinfo);
  // }
  function handleOnSubmitCheckoutForm() {
    //   const response = axios.post("http://localhost:3001/store", {
    //     profile: checkoutForm,
    //     shoppingCart: shoppingCart,
    //   });
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
                  cartamount={shoppingCart.length}
                  setSubtotal={setSubtotal}
                  subtotal={subtotal}
                  setShoppingCart={setShoppingCart}
                  handleOnToggle={handleOnToggle}
                  handleOnCheckoutFormChange={handleOnCheckoutFormChange}
                  handleOnSubmitCheckoutForm={handleOnCheckoutFormChange}
                  // handleRemoveItemFromCart={handleRemoveItemFromCart}

                  isOpen={isOpen}
                  checkoutForm={checkoutForm}
                  cartSize={shoppingCart.length}
                />
              }
            />
            <Route
              path="/products/:productId"
              element={
                <ProductDetail
                  handleAddItemToCart={handleAddItemToCart}
                  handleRemoveItemToCart={handleRemoveItemToCart}
                  shoppingCart={shoppingCart}
                  isOpen={isOpen}
                  products={products}
                  handleOnCheckoutFormChange={handleOnCheckoutFormChange}
                  handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm}
                  handleOnToggle={handleOnToggle}
                  checkoutForm={checkoutForm}
                  subtotal={subtotal}
                  cartSize={shoppingCart.length}
                />
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Sidebar
            isOpen={isOpen}
            shoppingCart={shoppingCart}
            // quantity={quantity}
            products={products}
            checkoutForm={checkoutForm}
            handleOnCheckoutFormChange={handleOnCheckoutFormChange}
            handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm}
            handleOnToggle={handleOnToggle}
            handleAddItemToCart={handleAddItemToCart}
            handleRemoveItemToCart={handleRemoveItemToCart}
            cartamount={shoppingCart.length}
            setSubtotal={setSubtotal}
            subtotal={subtotal}
            // price={price}
          />
          <Navbar />
        </main>
      </BrowserRouter>
      {/* <Home /> */}
    </div>
  );
}
