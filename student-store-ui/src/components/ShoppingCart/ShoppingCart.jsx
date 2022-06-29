import * as React from "react";
import "./ShoppingCart.css";

export default function ShoppingCart({ isOpen, shoppingCart, products }) {
  const show =
    shoppingCart.length === 0 ? (
      <div className="notification">
        {" "}
        No items added to cart yet. Start shopping now!
      </div>
    ) : (
      shoppingCart.map((item) => {
        let product = products.find((element) => {
          console.log("element and item: ", element, item);
          return element.id == item.id;
        });

        return (
          <ul className="cart-product-name">
            <li className="product-name"> {product.name} </li>
            <li className="product-quantity">{item.quantity}</li>
            <li className="product-unit-price">{product.price} </li>
            <li className="price">
              {" "}
              {(item.quantity * product.price).toFixed(2)}{" "}
            </li>
          </ul>
        );
      })
    );

  return (
    <div className="shopping-cart">
      <div className="shop-lab">Shopping Cart</div>

      <ul className="labels">
        <li className="name-lab"></li>
        <li className="quan-lab"></li>
        <li className="unitprice-lab"> </li>
        <li className="price-lab"> </li>
      </ul>

      {show}
    </div>
  );
}
