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
}) {
  React.useEffect(() => {
    console.log(isOpen);
  }, [isOpen]);

  const display1 = isOpen ? (
    <ShoppingCart
      isOpen={isOpen}
      shoppingCart={shoppingCart}
      products={products}
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

  // function openNav() {
  //   document.getElementById("mySidenav").style.width = "300px";
  // }

  // function closeNav() {
  //   document.getElementById("mySidenav").style.width = "0";
  // }
}
