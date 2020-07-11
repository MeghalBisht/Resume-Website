import React, { useState, useEffect } from "react";
import "./Project.css";
import projectList from "../ProjectList";

const MyProjects = ({ src, title, link, desc }) => {
  return (
    <div className="project-wrapper">
      <div className="project-details">
        <div className="project-bg"></div>
        <div className="inner-details">
          <h2>{title}</h2>
          <p>{desc}</p>
          <a href={link} target="_blank" rel="noopener noreferrer">
            Link to the project
          </a>
        </div>
      </div>
      <img src={src} alt="my_projects" />
    </div>
  );
};

function Project() {
  const [project, setProject] = useState([]);

  useEffect(() => {
    setProject(projectList);
  }, []);

  return (
    <div  id="projects" className="page project">
      <div className="bg-underlay-project bg-underlay"></div>
      <div className="project-content">
        <h1>My Projects</h1>
        <div className="project-list">
          {project &&
            project.map((project,i) => {
              return <MyProjects
                key={i}
                title={project.title}
                src={project.src}
                desc={project.desc}
                link={project.link}
              />;
            })}
        </div>
      </div>
    </div>
  );
}

export default Project;
