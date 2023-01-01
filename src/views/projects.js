import React, { Component } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import "./projects.css";
import Project from "../components/project";

export default class projects extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  projectsList = [
    {
      name: "Restuarant Management System",
      desc: "A system used in restaurant. Supports features like adding to the menu, deleting fron the menu, viewing sales(admin side), etc",
      tech: ["C"],
    },
    {
      name: "Optimal Treaps using Priority Changing Parameters",
      desc: "Extending the Restaurant Managment System, using treaps to give suggestions in the restaurant as per the most popular item",
      tech: ["C"],
    },
    {
      name: "Procfetch",
      desc: "A linux system utility tool. It shows the current state of the machine. Current state includes RAM,OS,Host,Shell,CPU Temp,etc",
      tech: ["Cpp"],
    },
    {
      name: "Flappy Bird",
      desc: "A game replicating the flappy bird on mobile but can be played on PC",
      tech: ["Python"],
    },
    {
      name: "Portfolio Website",
      desc: "A website about myself. The one you are on 😈",
      tech: ["HTML", "CSS", "JS", "React"],
    },
    {
      name: "Digital Birth Certificate System",
      desc: "A system used to apply, validate and also download birth certificates online",
      tech: ["PHP", "MYSQL"],
    },
  ];

  render() {
    return (
      <div className="projects">
        <Header title="PROJECTS" bgclr="#ffd600" />
        <div className="projectItem">
          {this.projectsList.map((el) => {
            return <Project data={el} />;
          })}
        </div>
        <Footer />
      </div>
    );
  }
}
