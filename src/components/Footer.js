import React from "react";
import Media from "./Media";
import "./style/footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <div className="footer-logo">
          <img src="/media/logo.svg" alt="logo" />
        </div>
        <div className="footer-text">Thanks For Scrolling</div>
        <Media />
      </div>
    </div>
  );
}

export default Footer;
