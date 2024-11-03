import React from "react";
import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";

const ProjectCard = ({
  projectImgUrl,
  projectTitle,
  projectDesc,
  githubLink,
  liveLink,
}) => {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-12 py-5 h-auto box-border rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000">
      <div className="w-full h-[80%] overflow-hidden rounded-lg">
        <img
          className="w-full h-60 object-cover group-hover:scale-110 duration-300 cursor-pointer rounded-lg"
          src={projectImgUrl}
          alt={projectTitle}
        />
      </div>

      <div className="w-full mt-5 flex flex-col gap-6">
        <div className="flex justify-between items-center">
          <h3 className="text-base uppercase text-designColor font-normal">
            {projectTitle}
          </h3>
          <div className="flex gap-2">
            <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-100 cursor-pointer">
              <a href={githubLink} target="_blank" rel="noopener noreferrer">
                <BsGithub />
              </a>
            </span>
            <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-100 cursor-pointer">
              <a href={liveLink} target="_blank" rel="noopener noreferrer">
                <FaGlobe />
              </a>
            </span>
          </div>
        </div>
        <p className="text-sm tracking-wide mt-3 hover:text-gray-100 duration-300">
          {projectDesc}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
