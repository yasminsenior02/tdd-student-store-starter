import * as React from "react";
import Navbar from "../Navbar/Navbar";
import ProductCard from "../ProductCard/ProductCard";
import Sidebar from "../Sidebar/Sidebar";
import "/.ProductView.css";

export default function ProductView({
  product,
  proudctId,
  //   handleAddItemToCart,
  //   handleRemoveItemToCart,
}) {
  return (
    <div className="productview">
      <h1 className="product-card">Product#{proudctId}</h1>
      <ProductCard
        product={product}
        productId={proudctId}
        // showDescription={true}
      />
    </div>
  );
}
