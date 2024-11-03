import React from "react";
import { bannerImg } from "../../assets";

const RightBanner = () => {
  return (
    <div className="w-full lg:w-1/2 flex justify-center items-center relative">
      <img
        src={bannerImg}
        alt="bannerIMG"
        className="w-[300px] max-w-[400px] h-auto z-10 rounded-lg filter grayscale"
      />
      <div className="absolute bottom-0 w-[400px] h-[250px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"></div>
    </div>
  );
};

export default RightBanner;
