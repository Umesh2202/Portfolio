import React from "react";
import Project from "../components/project";
import Header from "../components/header";
import "./projects.css";

export default function projects() {
  return (
    <div className="projects">
      <Header title="PROJECTS" />
      <div className="projectItem">
        <Project
          title="Restuarant Management System"
          desc="A system used in restaurant. Supports features like adding to the menu, deleting fron the menu, viewing sales(admin side), etc"
          tech={["C"]}
        />
        <Project
          title="Optimal Treaps using Priority Changing Parameters"
          desc="Extending the Restaurant Managment System, using treaps to give suggestions in the restaurant as per the most popular item"
          tech={["C"]}
        />
        <Project
          title="Procfetch"
          desc="A linux system utility tool. It shows the current state of the machine. Current state includes RAM,OS,Host,Shell,CPU Temp,etc"
          tech={["Cpp"]}
        />
        <Project
          title="Flappy Bird"
          desc="A game replicating the flappy bird on mobile but can be played on PC"
          tech={["Python"]}
        />
        <Project
          title="Portfolio Website"
          desc="A website about myself. The one you are on &#128514;"
          tech={["HTML", "CSS", "JS", "React"]}
        />
        <Project
          title="Digital Birth Certificate System"
          desc="A system used to apply, validate and also download birth certificates online"
          tech={["PHP", "MYSQL"]}
        />
      </div>
      {/* <Project />
      <Project />
      <Project />
      <Project /> */}
    </div>
  );
}
