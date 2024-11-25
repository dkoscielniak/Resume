import React from "react";
import ProjectItem from "../components/Projectitem";
import project1 from "../Images/project1.jpg";
import project2 from "../Images/project2.jpg";
import project3 from "../Images/project3.jpg";
import headshot from "../Images/headshot.jpg";
import "../styles/Projects.css";
import PortfolioInfo from "../Data/PortfolioInfo";

function Projects() {
  return (
    <div className="projects">
      <h1>Portfolio</h1>
      <div className="projectList">
        {/* <ProjectItem name="Personal Website" image={project1} />
        <ProjectItem name="Small Cleaning Business Website" image={project2} />
        <ProjectItem name="Keeper - A note Taking App" image={project3} /> */}
        {PortfolioInfo.map((project, id) => {
          return (
            <ProjectItem id={id} name={project.name} image={project.image} />
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
