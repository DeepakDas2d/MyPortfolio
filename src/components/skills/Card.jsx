import React from "react";

const Card = ({ title, src }) => {
  return (
    <div className="w-full h-40 rounded-lg shadow-shadowOne flex items-center bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-black hover:to-[#1e2024] transition-colors duration-100">
      <div className="flex flex-col items-center justify-center gap-5 w-full">
        <img src={src} alt="icon" className="w-24 h-24 object-contain" />
        <h2 className="text-xl font-titleFont text-gray-300">{title}</h2>
      </div>
    </div>
  );
};

export default Card;
