import * as React from "react";
import "./Sidebar.css";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import CheckoutForm from "../CheckoutForm/CheckoutForm";

export default function Sidebar({
  isOpen,
  shoppingCart,
  quantity,
  products,
  checkoutForm,
  handleOnCheckoutFormChange,
  handleOnSubmitCheckoutForm,
  handleOnToggle,
  cartamount,
  subtotal,
}) {
  React.useEffect(() => {}, [isOpen]);

  const display1 = isOpen ? (
    <ShoppingCart
      shoppingCart={shoppingCart}
      products={products}
      cartamount={cartamount}
      subtotal={subtotal}
    />
  ) : (
    ""
  );

  const display2 = isOpen ? (
    <CheckoutForm
      isOpen={isOpen}
      checkoutForm={checkoutForm}
      shoppingCart={shoppingCart}
      handleOnCheckoutFormChange={handleOnCheckoutFormChange}
      handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm}
    />
  ) : (
    ""
  );
  const cart = "";
  // const arrow = isOpen ? "<---" : "➡️"
  return (
    <section className="sidenav">
      {/* <a href="javascript:void(0)" class="closebtn" onClick="closeNav()">
        &times;
      </a> */}
      <button
        onClick={() => {
          handleOnToggle();
        }}
        className="toggle-button"
      >
        <i className="material-icons md-48">arrow_forward</i>
      </button>
      <div> {cart} </div>
      {display1} {display2}
    </section>
  );
}
