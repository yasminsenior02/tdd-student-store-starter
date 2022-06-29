import * as React from "react";
import "./ProductDetail.css";
import Hero from "../Hero/Hero";
import Sidebar from "../Sidebar/Sidebar";
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
  const [products, setProduct] = useState(null);

  const { productId } = useParams();
  const isLoading = !Boolean(products);
  const element = isLoading ? (
    "Loading.."
  ) : (
    <ProductView products={products} productId={productId} />
  );
  //getting data for the products based on their id -similar way in app

  //   <ProductView
  //   product={product}
  //   productId={productId}
  //   handleAddItemToCart={handleAddItemToCart}
  //   handleRemoveItemToCart={handleRemoveItemToCart}
  //   shoppingCart={shoppingCart}
  // ></ProductView>

  useEffect(async () => {
    const url = `https://codepath-store-api.herokuapp.com/store/`;
    const final = url + productId;
    const response = await axios.get(final);

    console.log("Response " + response);
    let responseded = response.data;
    setProduct(responseded.product);
    console.log("Response.data " + response.data);
    console.log(responseded);
  }, []);

  return (
    <div className="product-detail">
      <div className="box">{element}</div>
      <Navbar />
      <Sidebar />
    </div>
  );
}
