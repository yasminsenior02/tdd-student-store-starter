import * as React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Hero from "../Hero/Hero";
import ProductGrid from "../ProductGrid/ProductGrid";
import { useState } from "react";
// import Footer from "../Footer/Footer";
import "./Home.css";

export default function Home({
  products,
  search,
  handleRemoveItemToCart,
  handleAddItemToCart,
  shoppingCart,
  subtotal,
}) {
  const [searchText, setSearchText] = useState("");
  // const [Open, setOpen] = useState(true);

  // const handleToggle = () => {
  //   if (open) {
  //     setOpen(false);
  //   } else {
  //     setOpen(true);
  //   }
  // }
  const handleOnTextChange = (event) => {
    setSearchText(event.target.value);
  };
  //console.log(products);
  var searching = products.filter((element) => {
    //  console.log("products in filter: ", products);
    return element.name.toLowerCase().includes(searchText.toLowerCase());
  });

  //console.log(subtotal);

  return (
    <div className="home">
      <Navbar />
      <Sidebar subtotal={subtotal} />
      <Hero />
      <nav className="sub-nav-bar">
        <div className="content">
          <div className="row">
            <div className="search-bar">
              <input
                type="text"
                name="search"
                placeholder="Search"
                onChange={handleOnTextChange}
              />
              <i className="material-icons">search</i>
            </div>
          </div>
        </div>
      </nav>
      <ProductGrid
        products={searching}
        handleAddItemToCart={handleAddItemToCart}
        handleRemoveItemToCart={handleRemoveItemToCart}
        shoppingCart={shoppingCart}
        search={search}
        // searchText={searching}
        // handleItemToCart={props.handleItemToCart}
        // handleRemoveItemToCart={props.handleRemoveItemToCart}
        // shoppingCart={props.shoppingCart}
      />
      {/* <Footer /> */}
    </div>
  );
}
/*<div className="home">
      <p>Home</p>
    </div>*/
