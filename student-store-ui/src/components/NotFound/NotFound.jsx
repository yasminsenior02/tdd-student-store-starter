import * as React from "react";
import "./NotFound.css";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
// import Footer from "../Footer/Footer";

export default function NotFound() {
  return (
    <div className="notfound">
      <Navbar />
      <Sidebar />
      {/* <Footer /> */}
      <p>404 Not Found</p>
    </div>
  );
}
