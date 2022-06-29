import * as React from "react";
import "./Hero.css";

export default function Hero() {
  return (
    <div className="hero">
      <div className="content">
        <h1 className="intro">
          Welcome!
          <br /> Find Your Merch!
        </h1>
        {/* <h1 className="twointro">Find Your Merch!</h1> */}
        <p className="para">
          We have all kinds of goodies. Click on any of the items to start
          filling up your shopping cart. Checkout whenever you're ready.
        </p>
      </div>
      <img
        src="https://codepath-student-store-demo.surge.sh/assets/student_store_icon.18e5d61a.svg"
        className="hero-img"
      ></img>
    </div>
  );
}
