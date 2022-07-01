import * as React from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import { useState } from "react";

export default function ProductCard({
  product,
  productId,
  setShoppingCart,
  shoppingCart,
  //quantity,
  showDescription,
  handleAddItemToCart,
  handleRemoveItemToCart,
}) {
  const [quantity, setquantity] = useState(0);

  // function handleAddItemToCart() {
  //   setquantity(quantity + 1);
  // }

  // function handleRemoveItemToCart() {
  //   setquantity(quantity - 1);
  //   if (quantity < 1) {
  //     setquantity(0); //keeps above 0
  //   }
  //   setShoppingCart(shoppingCart.concat(item));
  // }

  const descriptshowing = showDescription ? (
    <div className="product-description">{product.descriptshowing}</div>
  ) : (
    ""
  );

  return (
    <div className="product-card">
      <div className="toshow">
        <Link to={"/products/" + productId}>
          <img src={product.image} className="Productimage" />
        </Link>
      </div>
      <div className="boarder">
        <p className="description">{product.descriptshowing}</p>

        <p className="product-name">{product.name}</p>

        <p className="product-price"> ${product.price}</p>

        <button className="add" onClick={() => handleAddItemToCart(productId)}>
          {"+"}
        </button>

        {
          <p className="product-quantity">
            {shoppingCart.find((item) => item.itemId === productId)
              ? shoppingCart.find((item) => item.itemId === productId).quantity
              : null}
          </p>
        }
        <button
          className="remove"
          onClick={() => handleRemoveItemToCart(productId)}
        >
          {"-"}
        </button>
      </div>
    </div>
  );
}
