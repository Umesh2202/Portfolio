import React from "react";
import "./navigation.css";
import { BrowserRouter as Link } from "react-router-dom";

export default function navigation() {
  return (
    <div className="nav">
      <div className="side">
        <div className="less-than sign">&#60;</div>
        <div className="title left">EDUCATION</div>
      </div>
      <div className="middle">
        {/* <Link to="/" className=""> */}
        <div className="title top middle_o">PROJECTS</div>
        {/* </Link> */}
        <div className="title bottom middle_o">SKILLS</div>
      </div>
      <div className="side">
        <div className="title right">ABOUT</div>
        <div className=" greater-than sign">&#62;</div>
      </div>
    </div>
  );
}
