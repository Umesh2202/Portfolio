import React, { Component } from "react";
import "./project.css";

export default class project extends Component {
  techs = "";

  render() {
    for (let i = 0; i < this.props.tech.length; i++) {
      this.techs += this.props.tech[i];
      this.techs += ", ";
    }
    this.techs = this.techs.slice(0, this.techs.length - 2);

    return (
      <div className="container">
        <h2 className="inner inner-title">{this.props.title}</h2>
        <p className="inner inner-desc">{this.props.desc}</p>
        <div className="tech">
          <h3 className="inner">Tech: </h3>
          <h3 className="inner">{this.techs}</h3>
        </div>
        <div className="git-hub-outer">
          <div className="git-hub-inner">
            <a
              target="_blank"
              href="https://icons8.com/icon/3tC9EQumUAuq/github"
            >
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
}
