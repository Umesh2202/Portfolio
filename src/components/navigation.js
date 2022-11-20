import React from "react";
import "./navigation.css";
import { Link } from "react-router-dom";

export default function navigation() {
  return (
    <div className="nav">
      <div className="side">
        <div className="less-than sign">&#60;</div>
        <div className="nav-text">
          <Link to="/projects" className="title left">
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
          <Link to="/projects" className="title right">
            ABOUT
          </Link>
        </div>
        <div className=" greater-than sign">&#62;</div>
      </div>
    </div>
  );
}
