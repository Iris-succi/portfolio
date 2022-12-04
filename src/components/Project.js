import React from "react";
import "../css/project.css";

function project({ project }) {
  return (
    <div className="project-card">
      <a href={project.link}>
        <img
          className="img-project"
          onMouseOver={(e) => (e.currentTarget.src = project.pictureC)}
          onMouseOut={(e) => (e.currentTarget.src = project.picture)}
          src={project.picture}
          alt={project.title}
        ></img>
      </a>
      <h2 className="title-project">{project.title}</h2>
      <div className="hr"></div>
      <p className="p-project">{project.description}</p>
      <p className="p-project">{project.theme}</p>
    </div>
  );
}

export default project;
