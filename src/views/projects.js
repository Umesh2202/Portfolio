import React, { Component } from "react";
import Project from "../components/project";
import Header from "../components/header";
import Footer from "../components/footer";
import "./projects.css";

export default class projects extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  projectsList = [
    [
      "Restuarant Management System",
      "A system used in restaurant. Supports features like adding to the menu, deleting fron the menu, viewing sales(admin side), etc",
      ["C"],
    ],
    [
      "Optimal Treaps using Priority Changing Parameters",
      "Extending the Restaurant Managment System, using treaps to give suggestions in the restaurant as per the most popular item",
      ["C"],
    ],
    [
      "Procfetch",
      "A linux system utility tool. It shows the current state of the machine. Current state includes RAM,OS,Host,Shell,CPU Temp,etc",
      ["Cpp"],
    ],
    [
      "Flappy Bird",
      "A game replicating the flappy bird on mobile but can be played on PC",
      ["Python"],
    ],
    [
      "Portfolio Website",
      "A website about myself. The one you are on &#128514;",
      ["HTML", "CSS", "JS", "React"],
    ],
    [
      "Digital Birth Certificate System",
      "A system used to apply, validate and also download birth certificates online",
      ["PHP", "MYSQL"],
    ],
  ];

  renderProject = () => {
    let projectCards = [];

    for (let i = 0; i < this.projectsList.length; i++) {
      projectCards.push(
        <Project
          title={this.projectsList[i][0]}
          desc={this.projectsList[i][1]}
          tech={this.projectsList[i][2]}
        />
      );
    }
    return projectCards;
  };

  render() {
    return (
      <div className="projects">
        <Header title="PROJECTS" bgclr="#ffd600" />
        <div className="projectItem">{this.renderProject()}</div>
        <Footer />
      </div>
    );
  }
}
