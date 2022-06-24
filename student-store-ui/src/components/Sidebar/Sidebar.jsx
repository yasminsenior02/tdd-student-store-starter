import * as React from "react";
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <section className="sidebar">
      {/* <a href class="closebtn" onclick="closeNav()">
        &times;
      </a> */}
      <button onClick={openNav} className="toggle-button button closed">
        <i className="material-icons md-48">arrow_forward</i>
      </button>
      <p>Sidebar</p>
    </section>
  );
}
function openNav() {
  document.getElementById("sidebar").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("sidebar").style.width = "0";
}
