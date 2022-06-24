import * as React from "react";
import Navbar from "../Navbar/Navbar";
import ProductCard from "../ProductCard/ProductCard";
import Sidebar from "../Sidebar/Sidebar";
import "/.ProductView.css";

export default function ProductView({
  product,
  proudctId,
  quantity,
  handleAddItemToCart,
  handleRemoveItemToCart,
}) {
  return (
    <div className="productview">
      <ProductCard
        productId={proudctId}
        showDescription={(showDescription = true)}
      />
      <h1 className="product-card">Product#{proudctId}</h1>
    </div>
  );
}
