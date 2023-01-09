import React, { useEffect } from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import SkillCard from "./components/skill_card/skill_card";
import skillsList from "./utils/skillsList.json";
import style from "./Skills.module.css";

const Skills = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={style.container}>
      <Header title="SKILLS" bgclr="#4903fc" color="#ffffff" />
      <div className={style.skills}>
        {skillsList.map((el) => {
          return (
            <SkillCard name={el.name} source={el.source} level={el.level} />
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default Skills;
