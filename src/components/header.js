import React, { Component } from "react";
import "./header.css";
import { Link } from "react-router-dom";

export default class header extends Component {
  render() {
    return (
      <div
        className="header"
        style={{
          backgroundColor: `${this.props.bgclr}`,
          color: `${this.props.color}`,
        }}
      >
        <div className="header_inner">
          <span className="home-outer">
            <Link to="/" className="header_text header_home">
              &#60;HOME
            </Link>
          </span>
          <span className="header_text header_title">{this.props.title}</span>
        </div>
      </div>
    );
  }
}
