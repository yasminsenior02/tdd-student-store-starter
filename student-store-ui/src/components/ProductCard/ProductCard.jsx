import * as React from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import "./ProductCard.css";
import { Link } from "react-router-dom";

export default function ProductCard({
  product,
  productId,
  quantity,
  handleAddItemToCart,
  handleRemoveItemToCart,
  showDescription,
}) {

    const description = showDescription ? <div className="product-description">{product.description}</div> : ""
   
  return (
    <li>
    <Link to={"/products" + productId}><img src={product.image}></img></Link>
    <button className="add" onClick={handleAddItemToCart(productId)}>{"+"}</button>
    <button className="remove" onClick={handleRemoveItemToCart(productId)}>{"-"}</button>
    <div className="product-card"></div>;
    <div className="product-name">{product.name}</div>;
    <div className="product-price"> ${product.price}</div>;
  );
}
