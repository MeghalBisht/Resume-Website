import React from "react";
import "./Myself.css";
import { Link } from "react-scroll";
import Typography from "@material-ui/core/Typography";
import Button from "../Button/Button";
const image = require("../../meghal.jpg");

function Myself() {
  return (
    <div id="myself" className="myself">
      <div className="bg-underlay-myself bg-underlay"></div>
      <div className="sonar-wrapper">
        <div className="sonar-emitter">
          <img src={image} alt="meghal" />
          <div className="sonar-wave"></div>
        </div>
      </div>
      <div className="myself-content">
        <Typography className="line1" variant="h5" gutterBottom>
          Hi! myself,
        </Typography>
        <Typography className="line2" variant="h3" gutterBottom>
          Meghal Bisht
        </Typography>
        <Typography className="line3" variant="h2" gutterBottom>
          {` < upcoming Software Engineer >`}
        </Typography>
        <Typography className="line4" variant="h2" gutterBottom>
          upcoming Software Engineer
        </Typography>
        <Link
          to="contact"
          smooth
          duration={1000}
        >
          <Button text="Connect with me" />
        </Link>
      </div>
    </div>
  );
}

export default Myself;
