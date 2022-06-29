import * as React from "react";
import Navbar from "../Navbar/Navbar";
import ProductCard from "../ProductCard/ProductCard";
import Sidebar from "../Sidebar/Sidebar";
import "./ProductView.css";

export default function ProductView({
  product,
  proudctId,
  quantity,
  shoppingCart,
  handleAddItemToCart,
  handleRemoveItemToCart,
}) {
  return (
    <div className="productview">
      <h1 className="product-card">Product#{proudctId}</h1>
      <ProductCard
        product={product}
        handleAddItemToCart={handleAddItemToCart}
        handleRemoveItemToCart={handleRemoveItemToCart}
        productId={proudctId}
        quantity={quantity}
        showDescription={true}
        shoppingCart={shoppingCart}
      />
    </div>
  );
}
