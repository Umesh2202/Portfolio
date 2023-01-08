import React from "react";
import Typewriter from "typewriter-effect";
import style from "./top.module.css";

const top = () => {
  return (
    <div className={style.container}>
      <div className={style.top}>
        <p className={style.fixed}>Hi!</p>
        <p className={style.float}>Umesh</p>
        <p className={style.fixed}>HERE</p>
      </div>
      <div className={style.about}>
        <span className={style.init}>I'm a </span>
        <span className={style.typwrt}>
          <Typewriter
            options={{
              strings: [
                "Student",
                "Coder (PRO ;)",
                "Front-End Dev",
                "Linux Enthusiast",
                "FOSS Contributor",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </span>
      </div>
    </div>
  );
};

export default top;
