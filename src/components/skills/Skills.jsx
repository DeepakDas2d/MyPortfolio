import React from "react";
import Title from "../layouts/Title";
import Card from "./Card";
import { skillsData } from ".";

const Skills = () => {
  return (
    <section
      id="skills"
      className="w-full h-auto pt-10 pb-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="Skills" desc="What I know" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {skillsData.map((skillData) => (
          <Card
            title={skillData.title}
            src={skillData.src}
            key={skillData._id}
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;
