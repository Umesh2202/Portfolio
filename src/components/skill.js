import React from "react";
import "./skill.css";

export default function skill(props) {
  return (
    <span className="skills-card">
      <img
        src={props.source}
        alt="some image"
        className="skill-image"
        width="75%"
      ></img>
      <h1 className="skill-name">{props.name}</h1>
      <p className="skill-level">{props.level}</p>
    </span>
  );
}
