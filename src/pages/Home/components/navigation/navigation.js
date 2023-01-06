import React, { Component } from "react";
import "./navigation.css";
import { Link } from "react-router-dom";

export default class navigation extends Component {
  render() {
    return (
      <div className="nav">
        <div className="side">
          <div className="less-than sign">&#60;</div>
          <div className="nav-text">
            <Link to="/education" className="title left">
              EDUCATION
            </Link>
          </div>
        </div>

        <div className="middle">
          <Link to="/projects" className="title top middle_o">
            <div className="nav-text">PROJECTS</div>
          </Link>

          <Link to="/skills" className="title bottom middle_o">
            <div className="nav-text">SKILLS</div>
          </Link>
        </div>

        <div className="side">
          <div className="nav-text">
            <Link to="/about" className="title right">
              ABOUT
            </Link>
          </div>
          <div className=" greater-than sign">&#62;</div>
        </div>
      </div>
    );
  }
}
