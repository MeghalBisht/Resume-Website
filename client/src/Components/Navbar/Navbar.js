import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-scroll";
import AddCircleIcon from "@material-ui/icons/AddCircle";

function Navbar() {
  window.addEventListener("resize", () => {
    if (window.innerWidth <= 600) {
      setShow(false);
    } else {
      setShow(true);
    }
  });

  const [show, setShow] = useState(window.innerWidth <= 600 ? false : true);
  const linkHandler = () =>{
    if(window.innerWidth <= 600){
      setShow(false)
    }
  }

  return (
    <div className="navbar">
      <div
        onClick={() => setShow(!show)}
        className={show ? "nav-mini-screen rotate" : "nav-mini-screen"}
      >
        <AddCircleIcon className="nav-icon" />
      </div>
      <ul className={show ? "nav-list" : "hide"}>
        <Link onClick={linkHandler} to="myself" smooth duration={1000}>
          <li>Myself</li>
        </Link>
        <Link onClick={linkHandler} to="skills" smooth duration={1000}>
          <li>Skillset</li>
        </Link>
        <Link
          onClick={linkHandler}
          to="workExp"
          smooth
          duration={1000}
        >
          <li>Work Experience</li>
        </Link>
        <Link
          onClick={linkHandler}
          to="projects"
          smooth
          duration={1000}
        >
          <li>Projects</li>
        </Link>
        <Link
          onClick={linkHandler}
          to="contact"
          smooth
          duration={1000}
        >
          <li>Say Hi</li>
        </Link>
      </ul>
    </div>
  );
}

export default Navbar;
