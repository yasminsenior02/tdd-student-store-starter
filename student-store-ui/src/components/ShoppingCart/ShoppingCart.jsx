import * as React from "react";
import "./ShoppingCart.css";

export default function ShoppingCart({
  isOpen,
  shoppingCart,
  products,
  cartamount,
  subtotal,
}) {
  let bftaxTotal = 0;
  let tax = 0;
  let finaltotal = 0;
  let total = 0;
  shoppingCart.map((item) => {
    let product = products.find((element) => {
      return element.id == item.itemId;
    });

    bftaxTotal = item.quantity * product.price;
    total += bftaxTotal;

    // tax = subtotal * 0.0875;
    // total += tax + subtotal;
  });
  tax = subtotal * 0.0875;
  total += tax;

  console.log(subtotal);

  if (cartamount === 0) {
    return (
      <div className="shopping-cart">
        <div className={isOpen ? "open" : "closed"}>
          <h3 className="notif">
            Shopping Cart
            <span className="icon">
              <i className="material-icons md-48">add_shopping_cart</i>
            </span>
          </h3>
          <div className="notification">
            No items added to cart yet. Start shopping now!
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="shopping-cart">
      <div className={isOpen ? "open" : "closed"}>
        <h3>
          Shopping Cart
          <span className="icon">
            <i className="material-icons md-48">add_shopping_cart</i>
          </span>
        </h3>
        <div className="CartTable">
          <div className="header">
            <div className="header-row">
              <span className="flex-2">Name</span>
              <span className="center">Quantity</span>
              <span className="center">Unit Price</span>
              <span className="center">Cost</span>
            </div>
            {shoppingCart
              ? shoppingCart.map((productitem, idx) => (
                  <div className="product-row" key={idx}>
                    <span className="flex-2 cart-product-name">
                      {
                        products.find(
                          (element) => element.id === productitem.itemId
                        ).name
                      }
                    </span>
                    <span className="center cart-product-quantity">
                      {productitem.quantity}
                    </span>
                    <span className="center cart-product-price">
                      {"$" +
                        products.find(
                          (element) => element.id === productitem.itemId
                        ).price}
                    </span>
                    <span className="center cart-product-subtotal">
                      {"$" +
                        productitem.quantity *
                          products.find(
                            (element) => element.id === productitem.itemId
                          ).price}
                    </span>
                  </div>
                ))
              : null}
          </div>
        </div>
      </div>

      <div className="finalie">
        <ul className="totals">
          <li>Subtotal: ${subtotal.toFixed(2)}</li>
          <li>Tax: ${tax.toFixed(2)} </li>
          <li>Total: ${total.toFixed(2)}</li>
        </ul>
      </div>
    </div>
  );
}
