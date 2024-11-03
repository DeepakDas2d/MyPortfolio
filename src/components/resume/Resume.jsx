import React, { useState } from "react";
import Title from "../layouts/Title";
import Education from "./Education";
import ProSkills from "./ProSkills";
import Experience from "./Experience";
const Resume = () => {
  const [educationData, setEducationData] = useState(true);
  const [skillData, setSkillData] = useState(false);
  const [experienceData, setExperienceData] = useState(false);
  return (
    <section id="resume" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="1+ years of experience" desc="My Resume" />
      </div>
      <div>
        <ul className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
          <li
            className={`${
              educationData ? "border-designColor rounded-lg" : "border-none"
            } resumeLi`}
            onClick={() =>
              setEducationData(true) &
              setSkillData(false) &
              setExperienceData(false)
            }
          >
            Education & Qualification
          </li>
          <li
            className={`${
              skillData ? "border-designColor rounded-lg" : "border-none"
            } resumeLi`}
            onClick={() =>
              setEducationData(false) &
              setSkillData(true) &
              setExperienceData(false)
            }
          >
            Professional Skills
          </li>
          {/* <li
            className={`${
              experienceData ? "border-designColor rounded-lg" : "border-none"
            } resumeLi`}
            onClick={() =>
              setEducationData(false) &
              setSkillData(false) &
              setExperienceData(true)
            }
          >
            Experience
          </li> */}
        </ul>
      </div>

      {educationData && <Education />}
      {skillData && <ProSkills />}
      {/* {experienceData && <Experience />} */}
    </section>
  );
};

export default Resume;
