import React from "react";
import Projects from "./Projects";
import "./style/works.css";

function Works() {
  return (
    <div className="work-container" id="work-container">
      <div className="work-info">
        <div className="work-text">
          <div className="work-title">
            <p>- Portfolio </p>
            All Creative Works.
          </div>
          <div className="work-description">
            I enjoy creating things that live on the internet.
          </div>
        </div>
        <div className="work-image">
          <img src="/media/red.svg" alt="red" />
        </div>
      </div>
      <div className="projects-container">
        <Projects />
      </div>
    </div>
  );
}

export default Works;
