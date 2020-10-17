import React from "react";
import "./style/intro.css";

function Introduction() {
  return (
    <div className="introContainer">
      <div className="info">
        <div className="infoUser">
          <div className="user">
            Daniel <br></br> García.
          </div>
          <div className="line">
            <span></span>
          </div>
          <div className="media">
            <i className="fab fa-github fa-lg"></i>
            <i className="fab fa-linkedin-in fa-lg"></i>
          </div>
        </div>
        <div className="information">
          <div className="infoTitle">
            Software Engineer and Front-end <br></br>
            Developer, based in México.
          </div>
          <div className="infoDescription">
            I´m a junior front-end developer looking for a new role in a
            exciting company. I focus on HTML, CSS and JS. When writing
            javascript code. I mostly use React, but i can adapt to whatever
            tools are required.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Introduction;
