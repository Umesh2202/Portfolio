import React from "react";
import style from "./header.module.css";
import { Link } from "react-router-dom";

const header = (props) => {
  return (
    <div
      className={style.container}
      style={{
        backgroundColor: `${props.bgclr}`,
        color: `${props.color}`,
      }}
    >
      <div className={style.header}>
        <span className={style.back}>
          <Link to="/">&#60;HOME</Link>
        </span>
        <span className={style.title}>{props.title}</span>
      </div>
    </div>
  );
};

export default header;
