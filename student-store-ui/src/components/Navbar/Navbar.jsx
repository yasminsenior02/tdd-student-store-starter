import * as React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      {/* <p>Navbar</p> */}
      <li>
        <Link to="/">CodePath</Link>
      </li>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/#about">About Us</Link>
      </li>
      <li>
        <Link to="/#contact">Contact Us</Link>
      </li>
      <li>
        <Link to="/#buy">Buy Now</Link>
      </li>
    </nav>
  );
}
