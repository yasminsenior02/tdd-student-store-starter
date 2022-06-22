import * as React from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
export default function ProductDetail() {
  return (
    <div className="productdetail">
      <Navbar />
      <Sidebar />
      <p>Product Detail</p>
    </div>
  );
}
