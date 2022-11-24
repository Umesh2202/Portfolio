import React from "react";
import "./education_card.css";

export default function education_card(props) {
  return (
    <div className="timeline">
      <div class="event" data-date={props.date}>
        <h3>{props.head}</h3>
        <p>{props.content}</p>
      </div>
    </div>
  );
}
