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
          desc="loremlskdjflkdsjflksdjaflksajdflkdsjflkdsjflksdjaflksdjflksdjfslkdfjsdalkfjsdflkj"
          tech={["C"]}
        />
        <Project
          title="Restuarant Management System"
          desc="A system"
          tech={["C"]}
        />
        <Project
          title="Restuarant Management System"
          desc="A system"
          tech={["C"]}
        />
        <Project
          title="Restuarant Management System"
          desc="A system"
          tech={["C"]}
        />
        <Project
          title="Restuarant Management System"
          desc="A system"
          tech={["C"]}
        />
      </div>
      {/* <Project />
      <Project />
      <Project />
      <Project /> */}
    </div>
  );
}
