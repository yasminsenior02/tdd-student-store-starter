import * as React from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";

export default function NotFound() {
  return (
    <div className="notfound">
      <Navbar />
      <Sidebar />
      <p>404 Not Found</p>
    </div>
  );
}
