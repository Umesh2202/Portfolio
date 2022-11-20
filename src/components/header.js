import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

export default function header(props) {
  return (
    <div
      className="header"
      style={{ backgroundColor: `${props.bgclr}`, color: `${props.color}` }}
    >
      <div className="header_inner">
        <span className="home-outer">
          <Link to="/" className="header_text header_home">
            &#60;HOME
          </Link>
        </span>
        <span className="header_text header_title">{props.title}</span>
      </div>
    </div>
  );
}
