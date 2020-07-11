import React from "react";
import "./Button.css"

function Button({ text }) {
  return (
    <div className="button">
      <a href="#">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        {text}
      </a>
    </div>
  );
}

export default Button;
