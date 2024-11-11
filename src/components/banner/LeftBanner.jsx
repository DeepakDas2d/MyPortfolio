import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaLinkedin, FaGithub, FaReact, FaDownload } from "react-icons/fa";
import { SiJavascript, SiRedux } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import Resume from "../../assets/DeepakDas_CV.pdf";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Frontend Developer.", "Professional Coder."],
    loop: true,
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 2000,
  });

  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-10 p-4 md:p-0">
      <div className="flex flex-col gap-5">
        <h4 className="text-lg font-normal">WELCOME TO MY PORTFOLIO</h4>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
          👋Hi, I'm{" "}
          <span className="text-designColor capitalize">Deepak Das</span>
        </h1>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorColor="#ff014f"
            cursorStyle="|"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          As a passionate Frontend Developer, I specialize in creating dynamic
          and responsive web applications that deliver seamless user
          experiences. With a strong foundation in HTML, CSS, and JavaScript, I
          enjoy transforming design concepts into functional code. I have
          experience with popular frameworks like React.js, allowing me to build
          interactive components efficiently. My goal is to stay up-to-date with
          the latest trends and best practices in frontend development to ensure
          that every project I work on is both innovative and user-friendly.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row gap-6 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <a
                href="https://www.linkedin.com/in/deepakdas2d/"
                target="_blank"
              >
                <FaLinkedin />
              </a>
            </span>
            <span className="bannerIcon">
              <a href="https://github.com/DeepakDas2d" target="_blank">
                <FaGithub />
              </a>
            </span>
          </div>
        </div>
        <div className="flex flex-col lg:items-center">
          <h2 className="text-base uppercase font-titleFont mb-4">
            Download Resume
          </h2>
          <span className="resumeIcon">
            <a href={Resume} target="_blank" download>
              <FaDownload />
            </a>
          </span>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Best skills on
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiJavascript />
            </span>
            <span className="bannerIcon">
              <SiRedux />
            </span>
            <span className="bannerIcon">
              <RiTailwindCssFill />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBanner;
