import React from "react";
import { Component } from "react";
import "./project.css";

export default class Project extends Component {
  data = this.props.data;
  render() {
    return (
      <div className="container pop-out">
        <h2 className="inner inner-title">{this.data.name}</h2>
        <div className="inner inner-desc">{this.data.desc}</div>
        <div className="tech">
          <h3 className="inner">Tech: </h3>
          <h3 className="inner">
            {this.data.tech.map((el) => {
              return <>{el} </>;
            })}
          </h3>
        </div>
      </div>
    );
  }
}
