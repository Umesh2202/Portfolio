import React, { Component } from "react";
import "./skill.css";

export default class skill extends Component {
  render() {
    return (
      <span className="skills-card">
        <img
          src={this.props.source}
          alt="some image"
          className="skill-image"
          width="75%"
        ></img>
        <h1 className="skill-name">{this.props.name}</h1>
        <p className="skill-level">{this.props.level}</p>
      </span>
    );
  }
}
