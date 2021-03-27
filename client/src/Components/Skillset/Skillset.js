import React from "react";
import "./Skillset.css";

function Skillset() {
  return (
    <div id="skills" className="page skillset">
      <div className="bg-underlay-skillset bg-underlay"></div>
      <div className="skillset-content">
        <h1>My Skillset</h1>
        <div className="skill-wrap">
          <h3>Languages</h3>
          <div>
            <p>Javascript</p>
            <p>Typescript</p>
            <p>Python</p>
            <p>C++</p>
            <p>C</p>
          </div>
        </div>
        <div className="skill-wrap">
          <h3>Front End</h3>
          <div>
            <p>ReactJS</p>
            <p>EmberJS</p>
            <p>Redux</p>
            <p>Next.js</p>
            <p>GraphQL</p>
            <p>HTML</p>
            <p>CSS(SCSS)</p>
            <p>Bootstrap</p>
            <p>MaterialUI</p>
          </div>
        </div>
        <div className="skill-wrap">
          <h3>Back End</h3>
          <div>
            <p>NodeJS</p>
            <p>MongoDB</p>
            <p>Express</p>
            <p>Flask</p>
            <p>Mongoose</p>
            <p>Postgres</p>
            <p>SQL</p>
          </div>
        </div>
        <div className="skill-wrap">
          <h3>Other</h3>
          <div>
            <p>Git & Github</p>
            <p>Figma</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skillset;
