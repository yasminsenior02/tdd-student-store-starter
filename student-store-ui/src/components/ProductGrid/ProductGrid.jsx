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
      {products.map((product, index) => {
        return (
          <ProductCard
            key={index}
            productId={product.id}
            product={product}
            showDescription={false}
            handleAddItemToCart={handleAddItemToCart}
            handleRemoveItemToCart={handleRemoveItemToCart}
            shoppingCart={shoppingCart}
            // quantity={
            //   shoppingCart.find((item) => item.itemId === product.id)
            //     ? shoppingCart.find((item) => item.itemId === product.Id)
            //         .quantity
            //     : null
            // }
          />
        );
      })}
    </div>
  );
}
