import React from "react";
import srcs from "./accounts_bar.json";
import style from "./accounts_bar.module.css";

const accounts_bar = () => {
  return (
    <div className={style.container}>
      {srcs.map((el) => {
        return <img src={el.src} alt="" />;
      })}
    </div>
  );
};

export default accounts_bar;
