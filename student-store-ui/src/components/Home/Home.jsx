import * as React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <Navbar />
      <p>Home</p>
    </div>
  );
}
/*<div className="home">
      <p>Home</p>
    </div>*/
