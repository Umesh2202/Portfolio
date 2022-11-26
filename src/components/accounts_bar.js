import React, { Component } from "react";
// import { Link } from "react-router-dom";
import "./accounts_bar.css";

export default class accounts_bar extends Component {
  render() {
    return (
      <div className="acc">
        <ul className="acc-list">
          <a href="https://github.com/Umesh2202" target="_blanck">
            <li className="acc-list-item">
              <img
                src="https://img.icons8.com/sf-ultralight/200/null/github.png"
                width="70px"
                className="logo"
                alt=""
              ></img>
            </li>
          </a>
          <a
            href="https://www.linkedin.com/in/umesh-shirsat-183852207/"
            target="_blanck"
          >
            <li className="acc-list-item">
              <img
                src="https://img.icons8.com/fluency/128/null/linkedin.png"
                width="64px"
                className="logo"
                alt=""
              ></img>
            </li>
          </a>
          <a href="https://leetcode.com/Umesh2202/" target="_blanck">
            <li className="acc-list-item">
              <img
                src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/128/null/external-level-up-your-coding-skills-and-quickly-land-a-job-logo-color-tal-revivo.png"
                width="45px"
                className="logo"
                alt=""
              ></img>
            </li>
          </a>
          {/* <Link to="/accounts" className="more">
            <li>&#62;</li>
          </Link> */}
        </ul>
      </div>
    );
  }
}
