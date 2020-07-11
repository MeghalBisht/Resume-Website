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
            <p>C++</p>
            <p>C</p>
          </div>
        </div>
        <div className="skill-wrap">
          <h3>Front End</h3>
          <div>
            <p>ReactJS</p>
            <p>JQuery</p>
            <p>Redux</p>
            <p>Next.js</p>
            <p>Gatsby</p>
            <p>GraphQL</p>
            <p>Apollo</p>
            <p>HTML</p>
            <p>CSS(SCSS)</p>
            <p>Bootstrap</p>
            <p>MaterialUI</p>
            <p>Wordpress</p>
          </div>
        </div>
        <div className="skill-wrap">
          <h3>Back End</h3>
          <div>
            <p>NodeJS</p>
            <p>MongoDB</p>
            <p>Mongoose</p>
            <p>Express</p>
          </div>
        </div>
        <div className="skill-wrap">
          <h3>Other</h3>
          <div>
            <p>Figma</p>
            <p>Git & Github</p>
            <p>Adobe Illustrator</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skillset;
