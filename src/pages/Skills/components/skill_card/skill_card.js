import React from "react";
import "./skill_card.css";

const skill_card = (props) => {
  return (
    <span className="skills-card pop-out">
      <img src={props.source} alt="" className="skill-image" width="75%"></img>
      <h1 className="skill-name">{props.name}</h1>
      <p className="skill-level">{props.level}</p>
    </span>
  );
};

export default skill_card;
