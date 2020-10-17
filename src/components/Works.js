import React from "react";
import "./style/works.css";

function Works() {
  return (
    <div className="work-container">
      <div className="work-info">
        <div className="work-text">
          <div className="work-title">- Portfolio All Creative Works.</div>
          <div className="work-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet
            pharetra, amet id sagittis, nisl in augue. Sed blandit egestas diam
            in ornare.
          </div>
        </div>
        <div className="work-image">
          <img src="/media/red.svg" alt="red" />
        </div>
      </div>
      <div className="projects-container"></div>
    </div>
  );
}

export default Works;
