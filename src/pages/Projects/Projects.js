import React, { useEffect } from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import ProjectCard from "./components/project_card/project_card";
import projectsList from "./utils/projectList.json";
import style from "./Projects.module.css";

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={style.container}>
      <Header title="PROJECTS" bgclr="#ffd600" color="#363636" />
      <div className={style.item}>
        {projectsList.map((el) => {
          return <ProjectCard data={el} key={el.id} />;
        })}
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
