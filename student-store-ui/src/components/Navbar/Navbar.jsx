import * as React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";

export default function Navbar() {
  return (
    <nav className="navbar">
      {/* <p>Navbar</p> */}
      <Logo />
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
