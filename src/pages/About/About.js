import React, { useEffect } from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import style from "./About.module.css";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={style.container}>
      <Header title="ABOUT" bgclr="#ff0862" color="#363636" />
      <div className={style.name}>
        <h1>Umesh </h1>
        <h1>Shirsat</h1>
      </div>
      <div className={style.desc}>
        <div className={style.paras}>
          <p>Hi 👋 I am Umesh nice to have you here</p>
          <p>I am an aspiring web developer looking for opportunities</p>
          <p>My hobbies include coding, watching anime, playing games</p>
          <p>Location: Pune, Maharashtra, India</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
