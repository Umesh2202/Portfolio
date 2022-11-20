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
      "https://img.icons8.com/plasticine/480/null/react.png",
      "Begginer",
      "React",
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
      <div className="skills-outer">
        {renderSkill()}
        {/* <Skill
          source="https://img.icons8.com/color/480/null/c-programming.png"
          level="Intermediate"
          name="C Language"
        /> */}
        {/* <Skill
          source="https://img.icons8.com/color/480/null/c-programming.png"
          level="4"
        />
        <Skill
          source="https://img.icons8.com/color/480/null/c-programming.png"
          level="4"
        />
        <Skill
          source="https://img.icons8.com/color/480/null/c-programming.png"
          level="4"
        />
        <Skill
          source="https://img.icons8.com/color/480/null/c-programming.png"
          level="4"
        />
        <Skill
          source="https://img.icons8.com/color/480/null/c-programming.png"
          level="4"
        />
        <Skill
          source="https://img.icons8.com/color/480/null/c-programming.png"
          level="4"
        />
        <Skill
          source="https://img.icons8.com/color/480/null/c-programming.png"
          level="4"
        />
        <Skill
          source="https://img.icons8.com/color/480/null/c-programming.png"
          level="4"
        />
        <Skill
          source="https://img.icons8.com/color/480/null/c-programming.png"
          level="4"
        /> */}
      </div>
    </div>
  );
}
