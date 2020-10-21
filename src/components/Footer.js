import React from "react";
import Media from "./Media";
import "./style/footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-content bottomReveal">
        <div className="footer-logo">
          <img src="/media/logo.svg" alt="logo" />
        </div>
        <div className="footer-text">Thanks For Scrolling</div>
        <div className="media-footer">
          <Media />
        </div>
      </div>
    </div>
  );
}

export default Footer;
