import React from "react";
import "./About.css";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import Tooltip from "@material-ui/core/Tooltip";

function About() {
  return (
    <div id="myself" className="page about">
      <div className="bg-underlay-about bg-underlay"></div>
      <div className="about-content">
        <h1>About Me</h1>
        <p>
          I am Meghal Bisht, a 20 year old undergraduate student. Currently, I
          am in 2nd year persuing BTech in (C.S.E) from <a rel="noopener noreferrer" target="_blank" href="http://aiactr.ac.in/">AIACTR</a>, Delhi.
        </p>
        <p>
          I currently work with MERN stack with javascript & typescript as my
          main languages.
        </p>
        <p>
          I am specialized in developing web apps with creative UIs and modern
          backends.
        </p>
        <p>
          Following below are links to my profile to know more about me, and the
          further pages contains my skillset and projects I've made/worked with.
        </p>
        <div className="about-icons">
          <Tooltip title="Github" placement="right-start">
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/MeghalBisht"
            >
              <GitHubIcon className="icons" />
            </a>
          </Tooltip>

          <Tooltip title="LinkedIn" placement="right-start">
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/meghal-bisht-777451177/"
            >
              <LinkedInIcon className="icons" />
            </a>
          </Tooltip>

          <Tooltip title="mailtomeghu25@gmail.com" placement="right-start">
            <a href="mailto:mailtomeghu25@gmail.com" rel="noopener noreferrer" target="_blank">
              <EmailIcon className="icons" />
            </a>
          </Tooltip>
        </div>
      </div>
    </div>
  );
}

export default About;
