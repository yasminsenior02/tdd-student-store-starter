import * as React from "react";
import Navbar from "../Navbar/Navbar";
import ProductCard from "../ProductCard/ProductCard";
import Sidebar from "../Sidebar/Sidebar";

import "./ProductGrid.css";
export default function ProductGrid({
  products,
  handleAddItemToCart,
  handleRemoveItemToCart,
  shoppingCart,
}) {
  return (
    <div className="product-grid">
      {products.map((product) => {
        return (
          <ProductCard
            productId={product.id}
            product={product}
            showDescription={false}
            handleAddItemToCart={handleAddItemToCart}
            handleRemoveItemToCart={handleRemoveItemToCart}
            shoppingCart={shoppingCart}
          />
        );
      })}
    </div>
  );
}
