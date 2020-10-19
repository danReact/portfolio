import React from "react";
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
        <div className="project">
          <div className="project-presentation">
            <span></span>
          </div>
          <div className="project-description">
            <div className="project-title">x-delta</div>
            <div className="project-text">
              Design of a web application focused on e-commerce of sneakers.
            </div>
          </div>
          <div className="project-tools">
            <div>NodeJs</div>
            <div>React</div>
            <div>Redux</div>
            <div>MongoDB</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Works;
