import React from "react";
import "./accounts.css";

export default function accounts() {
  return (
    <div className="acc">
      <ul className="acc-list">
        <a href="https://github.com/Umesh2202" target="_blanck">
          <li className="acc-list-item">
            <img
              src="https://img.icons8.com/sf-ultralight/200/null/github.png"
              width="70px"
              className="logo"
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
            ></img>
          </li>
        </a>
        <a href="https://leetcode.com/Umesh2202/" target="_blanck">
          <li className="acc-list-item">
            <img
              src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/128/null/external-level-up-your-coding-skills-and-quickly-land-a-job-logo-color-tal-revivo.png"
              width="45px"
              className="logo"
            ></img>
          </li>
        </a>
        <li className="more">&#62;</li>
      </ul>
    </div>
  );
}
