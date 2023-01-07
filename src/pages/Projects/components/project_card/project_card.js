import React from "react";
import cx from "classnames";
import css from "./project_card.module.css";

const project_card = (props) => {
  const data = props.data;
  let key = 0;

  return (
    <div className={cx(css.container, css.popout)}>
      <h2 className={cx(css.inner, css.innerTitle)}>{data.name}</h2>
      <div className={cx(css.inner, css.innerDesc)}>{data.desc}</div>
      <div className={css.tech}>
        <h3 className={css.inner}>Tech: </h3>
        <h3 className={css.inner}>
          {data.tech.map((tech) => {
            return <span key={key++}>{tech} </span>;
          })}
        </h3>
      </div>
    </div>
  );
};

export default project_card;
