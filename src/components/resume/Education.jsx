import React from "react";
import ResumeCard from "./ResumeCard";
import { resumeCardData } from ".";
import { experienceData } from "./experienceData";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lg:flex-row gap-10 lg:gap-20 "
    >
      {/* part one  */}
      <div>
        <div className="py-6 lg:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2017 - 2023</p>
          <h2 className="text-3xl md:text-4xl font-bold">Qualification</h2>
        </div>
        <div className=" mt-7 lg:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          {resumeCardData.map((data) => (
            <ResumeCard
              title={data.title}
              subTitle={data.subTitle}
              result={data.result}
              desc={data.desc}
              key={data.result}
            />
          ))}
        </div>
      </div>
      {/* part two */}
      <div>
        <div className="py-6 lg:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2023 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Experience</h2>
        </div>
        <div className=" mt-7 lg:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-28">
          {experienceData.map((data) => (
            <ResumeCard
              title={data.title}
              subTitle={data.subTitle}
              result={data.date}
              desc={data.desc}
              key={data.date}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
