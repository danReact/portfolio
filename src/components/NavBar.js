import React from "react";
import "./style/navbar.css";

function NavBar() {
  const handleClick = (option) => (e) => {
    e.preventDefault();
    if (option === "open") {
      document.getElementById("nav-options").style.visibility = "visible";
    } else {
      document.getElementById("nav-options").style.visibility = "hidden";
    }
  };

  return (
    <nav>
      <div className="burger-menu" onClick={handleClick("open")}>
        <i id="mobile" className="fas fa-bars fa-2x"></i>
      </div>
      <div id="nav-options" className="nav-options">
        <div className="options">
          <a href="#introContainer" className="initial-option">
            Introduction <span></span>
          </a>
          <a href="#work-container">Works</a>
          <a href="#contact-container">Contact</a>
        </div>
        <div id="mobile" className="closeMenu" onClick={handleClick("close")}>
          <i className="fas fa-times fa-lg"></i>
        </div>
      </div>
      <div className="brand">
        <img src="/media/logo.svg" alt="logo" />
      </div>
    </nav>
  );
}

export default NavBar;
