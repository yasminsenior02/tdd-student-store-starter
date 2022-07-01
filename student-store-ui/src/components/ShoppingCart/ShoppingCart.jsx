import * as React from "react";
import "./ShoppingCart.css";

export default function ShoppingCart({ isOpen, shoppingCart, products }) {
  const shoppingdisplay =
    shoppingCart.length === 0 ? (
      <div className="notification">
        {" "}
        No items added to cart yet. Start shopping now!
      </div>
    ) : (
      shoppingCart.map((item) => {
        let product = products.find((el) => {
          console.log("element and item: ", el, item);
          return el.id == item.id;
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
        <li className="name-lab">Product</li>
        <li className="quan-lab">Amount</li>
        <li className="unitprice-lab">Product Price</li>
        <li className="price-lab">Price </li>
      </ul>

      {shoppingdisplay}
    </div>
  );
}
