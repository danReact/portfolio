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
            <div className="project-image">
              <img src="/media/projects/xdelta.png" alt="xdelta" />
            </div>
            {/* <div className="project-cover"></div> */}
          </div>
          <div className="project-name">title</div>
          <div className="project-description">banner</div>
          <div className="project-tools">tilities</div>
        </div>
      </div>
    </div>
  );
}

export default Works;
