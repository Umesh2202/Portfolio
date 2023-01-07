import React, { useEffect } from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import EducationCard from "./components/education_card/education_card";
import style from "./Education.module.css";

const Education = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={style.container}>
      <Header title="EDUCATION" bgclr="#ac00fc" color="#ffffff" />
      <div className={style.education}>
        <EducationCard
          head="Till 10th"
          content="Nashik Cambridge School"
          date="till 2018"
        />
        <EducationCard
          head="Till 12th"
          content="M.S.Gosavi College of Engineering"
          date="till 2020"
        />
        <EducationCard
          head="Till Grad"
          content="Collge of Engineering Pune"
          date="till 2024"
        />
      </div>
      <Footer />
    </div>
  );
};

export default Education;
