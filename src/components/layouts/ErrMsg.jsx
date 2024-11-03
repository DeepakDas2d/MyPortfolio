import React from "react";

const ErrMsg = ({ errorMsg }) => {
  return (
    <p className="py-3 bg-gradient-to-r from-[1e2024] to-[23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce">
      {errorMsg}
    </p>
  );
};

export default ErrMsg;
