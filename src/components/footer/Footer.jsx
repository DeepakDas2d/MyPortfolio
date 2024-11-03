import React from "react";
import { logo } from "../../assets";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full py-10 flex flex-col lg:flex-row justify-between items-center px-4">
      <div className="flex justify-center items-center gap-8 mb-6 lg:mb-0">
        <img src={logo} alt="logo" className="w-20" />
        <div className="flex gap-4">
          <span className="bannerIcon">
            <FaLinkedin />
          </span>
          <span className="bannerIcon">
            <FaGithub />
          </span>
        </div>
      </div>

      <p className="text-center text-gray-500 text-base">
        All rights reserved by Deepak Das &copy; 2024.
      </p>
    </div>
  );
};

export default Footer;
