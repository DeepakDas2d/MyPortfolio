import React from "react";
import Title from "../layouts/Title";
import ProjectCard from "./ProjectCard";
import { projectData } from ".";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="Visit My Portfolio" desc="My Projects" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-14">
        {projectData.map((data) => (
          <ProjectCard
            projectImgUrl={data.projectImg}
            projectTitle={data.projectTitle}
            projectDesc={data.projectDesc}
            githubLink={data.githubLink}
            liveLink={data.liveLink}
            key={data.projectTitle}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
