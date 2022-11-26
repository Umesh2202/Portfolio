import React, { Component } from "react";
import "./education_card.css";

export default class education_card extends Component {
  render() {
    return (
      <div className="timeline">
        <div class="event" data-date={this.props.date}>
          <h3>{this.props.head}</h3>
          <p>{this.props.content}</p>
        </div>
      </div>
    );
  }
}
