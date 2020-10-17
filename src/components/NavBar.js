import React from "react";
import "./style/navbar.css";

function NavBar() {
  return (
    <nav>
      <i id="mobile" className="fas fa-bars fa-2x"></i>
      {/* <div className="nav-options">
        <div id="mobile" className="closeMenu">
          <i className="fas fa-times fa-lg"></i>
        </div>
        <div className="options">
          <a href="/">Introduction</a>
          <a href="/">Works</a>
          <a href="/">Contact</a>
        </div>
      </div> */}
      <div className="brand">
        <img src="/media/logo.svg" alt="logo" />
      </div>
    </nav>
  );
}

export default NavBar;
