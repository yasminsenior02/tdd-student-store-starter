import * as React from "react";
import "./ProductDetail.css";
import Hero from "../Hero/Hero";
// import Sidebar from "../Sidebar/Sidebar";
// import Navbar from "../Navbar/Navbar";
import NotFound from "../NotFound/NotFound";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import ProductView from "../ProductView/ProductView";

export default function ProductDetail({
  handleAddItemToCart,
  handleRemoveItemToCart,
  shoppingCart,
}) {
  const [product, setProduct] = useState(null);

  const { productId } = useParams();
  //const url = "https://codepath-store-api.herokuapp.com/store/";

  //getting data for the products based on their id -similar way in app

  //   <ProductView
  //   product={product}
  //   productId={productId}
  //   handleAddItemToCart={handleAddItemToCart}
  //   handleRemoveItemToCart={handleRemoveItemToCart}
  //   shoppingCart={shoppingCart}
  // ></ProductView>

  useEffect(async () => {
    const response = await axios.get(
      `http://localhost:3001/store/${productId}`
    );

    console.log("response.data.product " + response);

    setProduct(response.data);
    console.log(response.data);
  }, []);

  //console.log(product.id);

  return (
    <div className="product-detail">
      {/* <div className="box">{element}</div> */}
      {/* <Navbar />
      <Sidebar /> */}
      {product ? (
        <ProductView
          product={product}
          productId={product.id}
          handleAddItemToCart={handleAddItemToCart}
          handleRemoveItemToCart={handleRemoveItemToCart}
          shoppingCart={shoppingCart}
          // quantity={
          //   shoppingCart.find((item) => item.itemId === product.id)
          //     ? shoppingCart.find((item) => item.itemId === productId).quantity
          //     : null
          // }
        ></ProductView>
      ) : null}
    </div>
  );
}
