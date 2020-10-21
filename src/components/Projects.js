import React from "react";

function Projects() {
  return (
    <>
      <div
        className="project leftReveal"
        onClick={() => window.open("/", "_blank")}
      >
        <div className="project-presentation xdelta">
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
      <div
        className="project rightReveal"
        onClick={() => window.open("/", "_blank")}
      >
        <div className="project-presentation mxcoin">
          <span></span>
        </div>
        <div className="project-description">
          <div className="project-title">mxcoin</div>
          <div className="project-text">
            Web application that shows the exchange rate from dollars to pesos.
          </div>
        </div>
        <div className="project-tools">
          <div>NodeJs</div>
          <div>React</div>
          <div>MongoDB</div>
        </div>
      </div>
      <div
        className="project leftReveal"
        onClick={() => window.open("/", "_blank")}
      >
        <div className="project-presentation  dashboard">
          <span></span>
        </div>
        <div className="project-description">
          <div className="project-title">dashboard</div>
          <div className="project-text">
            Design of a web page that shows the information of the social
            networks.
          </div>
        </div>
        <div className="project-tools">
          <div>React</div>
        </div>
      </div>
    </>
  );
}

export default Projects;
