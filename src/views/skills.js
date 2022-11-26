import React, { Component } from "react";
import Skill from "../components/skill";
import Header from "../components/header";
import Footer from "../components/footer";
import "./skills.css";

export default class skills extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  skillList = [
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

  renderSkill = () => {
    let skillCards = [];

    for (let i = 0; i < this.skillList.length; i++) {
      skillCards.push(
        <Skill
          source={this.skillList[i][0]}
          level={this.skillList[i][1]}
          name={this.skillList[i][2]}
        />
      );
    }
    return skillCards;
  };

  render() {
    return (
      <div>
        <Header title="SKILLS" bgclr="#4903fc" color="#ffffff" />
        <div className="skills-outer">{this.renderSkill()}</div>
        <Footer />
      </div>
    );
  }
}
