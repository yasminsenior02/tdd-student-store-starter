import * as React from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
// import Footer from "../Footer/Footer";
import "./ProductDetail.css";

export default function ProductDetail() {
  return (
    <div className="productdetail">
      <Navbar />
      <Sidebar />
      <p>Product Detail</p>
    </div>
  );
}
