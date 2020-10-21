import React from "react";
import Media from "./Media";
import "./style/intro.css";

function Introduction() {
  return (
    <div className="introContainer" id="introContainer">
      <div className="info dropDown">
        <div className="infoUser">
          <div className="user">
            Daniel <br></br> García.
          </div>
          <div className="line">
            <span></span>
          </div>
          <div className="media">
            <Media />
          </div>
        </div>
        <div className="information">
          <div className="infoTitle">
            Software Engineer and Front-end Developer, based in México.
          </div>
          <div className="infoDescription">
            I'm a software engineer based in México, I specialize in building
            (and occasionally designing) websites and everything in between.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Introduction;
