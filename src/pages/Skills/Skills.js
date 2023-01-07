import React, { useEffect } from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Skill from "./components/skill_card/skill_card";
import style from "./Skills.module.css";

const Skills = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const skillList = [
    [
      "https://img.icons8.com/color/480/null/c-programming.png",
      "Intermediate",
      "C Language",
    ],
    [
      "https://img.icons8.com/color/480/null/c-plus-plus-logo.png",
      "Intermediate",
      "C++ Language",
    ],
    [
      "https://img.icons8.com/color/480/null/html-5--v1.png",
      "Intermediate",
      "HTML",
    ],
    ["https://img.icons8.com/color/480/null/css3.png", "Intermediate", "CSS"],
    [
      "https://img.icons8.com/fluency/480/null/javascript.png",
      "Intermediate",
      "JS",
    ],
    [
      "https://img.icons8.com/color/480/null/mysql-logo.png",
      "Intermediate",
      "MySQL",
    ],
    [
      "https://img.icons8.com/plasticine/480/null/react.png",
      "Beginner",
      "React",
    ],
    [
      "https://img.icons8.com/plasticine/480/null/bash.png",
      "Beginner",
      "Shell",
    ],
    [
      "https://cdn-icons-png.flaticon.com/512/6124/6124995.png",
      "Beginner",
      "Linux",
    ],
    [
      "https://img.icons8.com/color/480/null/python--v1.png",
      "Beginner",
      "Python",
    ],
  ];

  const renderSkill = () => {
    let skillCards = [];

    for (let i = 0; i < skillList.length; i++) {
      skillCards.push(
        <Skill
          source={skillList[i][0]}
          level={skillList[i][1]}
          name={skillList[i][2]}
        />
      );
    }
    return skillCards;
  };

  return (
    <div>
      <Header title="SKILLS" bgclr="#4903fc" color="#ffffff" />
      <div className={style.skillsOuter}>{renderSkill()}</div>
      <Footer />
    </div>
  );
};

export default Skills;
