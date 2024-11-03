import React from "react";

const SuccessMsg = ({ successMsg }) => {
  return (
    <p className="py-3 bg-gradient-to-r from-[1e2024] to-[23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce">
      {successMsg}
    </p>
  );
};

export default SuccessMsg;
