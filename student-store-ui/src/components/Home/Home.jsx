import * as React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <Navbar />
      <Sidebar />
      <p>Home</p>
    </div>
  );
}
/*<div className="home">
      <p>Home</p>
    </div>*/
