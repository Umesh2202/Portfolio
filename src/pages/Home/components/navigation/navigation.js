import React from "react";
import cx from "classnames";
import { Link } from "react-router-dom";
import style from "./navigation.module.css";

const navigation = () => {
  return (
    <div className={style.container}>
      <div className={style.side}>
        <div className={style.sign}>&#60;</div>
        <div>
          <Link to="/education" className={cx(style.title, style.left)}>
            EDUCATION
          </Link>
        </div>
      </div>

      <div className={style.middle}>
        <Link to="/projects" className={cx(style.title, style.top)}>
          <div>PROJECTS</div>
        </Link>

        <Link to="/skills" className={cx(style.title, style.bottom)}>
          <div>SKILLS</div>
        </Link>
      </div>

      <div className={style.side}>
        <div>
          <Link to="/about" className={cx(style.title, style.right)}>
            ABOUT
          </Link>
        </div>
        <div className={style.sign}>&#62;</div>
      </div>
    </div>
  );
};

export default navigation;
