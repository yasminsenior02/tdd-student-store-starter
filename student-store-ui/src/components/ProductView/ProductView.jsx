import * as React from "react";
import Navbar from "../Navbar/Navbar";
import ProductCard from "../ProductCard/ProductCard";
import Sidebar from "../Sidebar/Sidebar";
import "./ProductView.css";

export default function ProductView({
  product,
  productId,
  quantity,
  shoppingCart,
  handleAddItemToCart,
  handleRemoveItemToCart,
}) {
  return (
    <div className="productview">
      <h1 className="product-card">Product!{productId}</h1>
      <ProductCard
        product={product}
        handleAddItemToCart={handleAddItemToCart}
        handleRemoveItemToCart={handleRemoveItemToCart}
        productId={productId}
        // quantity={quantity}
        showDescription={true}
        shoppingCart={shoppingCart}
      />
    </div>
  );
}
// quantity variable with find go into shopping cart and find the item
