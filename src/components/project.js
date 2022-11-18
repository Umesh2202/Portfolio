import React from "react";
import "./project.css";

export default function project(props) {
  let techs = "";
  for (let i = 0; i < props.tech.length; i++) {
    techs += props.tech[i];
    techs += ", ";
  }
  techs = techs.slice(0, techs.length - 2);

  return (
    <div className="container">
      <h2 className="inner inner-title">{props.title}</h2>
      <p className="inner inner-desc">{props.desc}</p>
      <div className="tech">
        <h3 className="inner">Tech: </h3>
        <h3 className="inner">{techs}</h3>
      </div>
      <div className="git-hub-outer">
        <div className="git-hub-inner">
          <a target="_blank" href="https://icons8.com/icon/3tC9EQumUAuq/github">
            <img
              src="https://img.icons8.com/glyph-neue/64/null/github.png"
              width="50px"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
