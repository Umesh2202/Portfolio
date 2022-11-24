import React from "react";
import Skill from "../components/skill";
import Header from "../components/header";
import "./skills.css";

export default function skills() {
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
      "https://img.icons8.com/fluency/480/000000/javascript.png",
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
      "Begginer",
      "React",
    ],
    [
      "https://img.icons8.com/plasticine/480/null/bash.png",
      "Begginer",
      "Shell",
    ],
    [
      "https://cdn-icons-png.flaticon.com/512/6124/6124995.png",
      "Begginer",
      "Linux",
    ],
    [
      "https://img.icons8.com/color/480/null/python--v1.png",
      "Begginer",
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
      <div className="skills-outer">{renderSkill()}</div>
    </div>
  );
}
