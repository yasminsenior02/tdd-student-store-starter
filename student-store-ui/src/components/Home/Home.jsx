import * as React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import ProductGrid from "../ProductGrid/ProductGrid";
// import Footer from "../Footer/Footer";
import "./Home.css";

export default function Home({
  products,
  // handleItemToCart,
  // handleRemoveItemToCart,
  // shoppingCart,
}) {
  return (
    <div className="home">
      <Navbar />
      <Sidebar />
      <ProductGrid
        products={products}
        // handleItemToCart={handleItemToCart}
        // handleRemoveItemToCart={handleRemoveItemToCart}
        // shoppingCart={shoppingCart}
      />
      {/* <Footer /> */}
    </div>
  );
}
/*<div className="home">
      <p>Home</p>
    </div>*/
