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
      <h2 className="inner">{props.title}</h2>
      <p className="inner inner-desc">{props.desc}</p>
      <div className="tech">
        <h3 className="inner">Tech: </h3>
        <h3 className="inner">{techs}</h3>
      </div>
    </div>
  );
}
