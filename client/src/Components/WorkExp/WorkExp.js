import React, { useState, useEffect } from "react";
import "./WorkExp.css";
import "../Projects/Project.css";
import workList from "../WorkList";

const MyProjects = ({ src, title, duration, link, desc }) => {
  return (
    <div className="project-wrapper work-wrapper">
      <div className="project-details">
        <div className="project-bg"></div>
        <div className="inner-details">
          <h2>{title}</h2>
          <h4>({duration})</h4>
          <p>{desc}</p>
          <a href={link} target="_blank" rel="noopener noreferrer">
            Link to the project/website
          </a>
        </div>
      </div>
      <img src={src} alt="my_projects" />
    </div>
  );
};

function Project() {
  const [workExp, setWorkexp] = useState([]);

  useEffect(() => {
    setWorkexp(workList);
  }, []);

  return (
    <div  id="workExp" className="page work">
      <div className="bg-underlay-work bg-underlay"></div>
      <div className="work-content">
        <h1>Work Experience</h1>
        <div className="project-list">
          {workExp &&
            workExp.map((workExp,i) => {
              return <MyProjects
                key={i}
                title={workExp.title}
                duration={workExp.duration}
                src={workExp.src}
                desc={workExp.desc}
                link={workExp.link}
              />;
            })}
        </div>
      </div>
    </div>
  );
}

export default Project;
