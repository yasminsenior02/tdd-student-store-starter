import * as React from "react";
import "./CheckoutForm.css";
import { useEffect, useState } from "react";
import axios from "axios";

export default function CheckoutForm(props) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleOnCheckOut = () => {
    var userInfo = {
      name: name,
      email: email,
    };
    axios.post(`http://localhost:3001/store`, {
      shoppingCart: props.shoppingCart,
      user: userInfo,
    });

    props.setShoppingCart([]);
    document.getElementById("nameInput").value = "";
    document.getElementById("email").value = "";
  };

  return (
    <div className="checkout-form">
      <h3 class>
        Payment Info
        <span class="button">
          <i class="material-icons md-48">monetization_on</i>
        </span>
      </h3>
      <div class="input-field">
        <label class="label">Name</label>
        <div class="control">
          <input
            name="name"
            class="checkout-form-input"
            type="text"
            placeholder="Name"
            onChange={handleNameChange}
          ></input>
        </div>
      </div>
      <div class="input-field">
        <label class="control">Email</label>
        <div class="control">
          <input
            name="email"
            class="checkout-form-input"
            type="email"
            placeholder="Email"
            onChange={handleEmailChange}
          ></input>
        </div>
      </div>
      <div class="field">
        <div class="control">
          <label class="checkbox">
            <input name="termsAndConditions" type="checkbox"></input>
            <span class="label">
              I agree to the
              <a href="#terms-and-conditions">terms and conditions</a>
            </span>
          </label>
        </div>
        <p class="is-danger"></p>
      </div>
      <div class="field">
        <div class="control">
          <button className="button checkout-button" onClick={handleOnCheckOut}>
            Checkout
          </button>
        </div>
      </div>
      <div className="checkout-success">
        <h3>
          Checkout Info
          <span className="icon">
            <i className="material-icons md-48">fact_check</i>
          </span>
        </h3>
        <div className="content">
          <p>
            A confirmation email will be sent to you to confirm receipt of this
            order. Once confirmed, the order will be delivered to your residence
          </p>
        </div>
      </div>
      {/* Displays receipt or error */}
      {props.receipt ? (
        <>
          {props.error === "Success!" ? (
            <div className="success">
              <h1>Success!</h1>
              <ul>
                {props.receipt.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}{" "}
              </ul>
            </div>
          ) : (
            <div className="error">⚠ {props.error}.</div>
          )}
        </>
      ) : (
        <>
          <h1></h1>
        </>
      )}
    </div>
  );
}
