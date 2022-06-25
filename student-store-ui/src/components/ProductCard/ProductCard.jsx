import * as React from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import "./ProductCard.css";
import { Link } from "react-router-dom";

export default function ProductCard({
  product,
  productId,
  //   quantity,
  //   handleAddItemToCart,
  //   handleRemoveItemToCart,
  //   showDescription,
}) {
  //   const description = showDescription ?
  //     <div className="product-description">{product.description}</div>
  //   ) : (
  //     ""
  //   );

  return (
    <div className="product-card">
      <Link to={"/products/" + productId}>
        <img src={product.image} className="Productimage" />
      </Link>
      {/* <button className="add" onClick={() => handleAddItemToCart()}>
        {"+"}
      </button>
      <button className="remove" onClick={() => handleRemoveItemToCart()}>
        {"-"}
      </button> */}
      {/* <div className="product-quantity">{quantity}</div> */}
      <div className="product-name">{product.name}</div>;
      <div className="product-price"> ${product.price}</div>;
    </div>
  );
}
