import React from "react";
import style from "./skill_card.module.css";

const skill_card = (props) => {
  return (
    <span className={style.container}>
      <img src={props.source} alt="" className={style.img} width="75%"></img>
      <h1 className={style.name}>{props.name}</h1>
      <p className={style.level}>{props.level}</p>
    </span>
  );
};

export default skill_card;
