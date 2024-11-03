// import React, { useState } from "react";
// import { contactImg } from "../../assets";
// import { FaLinkedin, FaGithub, FaCopy } from "react-icons/fa";

// const ContactLeft = () => {
//   const [copiedPhone, setCopiedPhone] = useState(false);
//   const [copiedEmail, setCopiedEmail] = useState(false);

//   const copyToClipboard = (text, type) => {
//     navigator.clipboard.writeText(text);
//     if (type === "phone") {
//       setCopiedPhone(true);
//       setTimeout(() => setCopiedPhone(false), 2000); // Reset after 2 seconds
//     } else if (type === "email") {
//       setCopiedEmail(true);
//       setTimeout(() => setCopiedEmail(false), 2000); // Reset after 2 seconds
//     }
//   };

//   return (
//     <div className="w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center ">
//       <img
//         src={contactImg}
//         alt="img"
//         className="w-full h-64 object-cover rounded-lg mb-2"
//       />
//       <div className="flex flex-col gap-4">
//         <h3 className="text-3xl font-bold text-white">Deepak Das</h3>
//         <p className="text-lg font-normal text-gray-400">Frontend Developer</p>
//         <p className="text-base text-gray-400 tracking-wide">
//           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam, omnis!
//         </p>

//         {/* Phone Section with Copy Button */}
//         <p className="text-base text-gray-400 flex items-center gap-2">
//           Phone:
//           <span className="text-lightText">+917042917613</span>
//           <button
//             onClick={() => copyToClipboard("+917042917613", "phone")}
//             className="text-sm text-gray-200 font-bold underline ml-2"
//           >
//             {copiedPhone ? (
//               <span className="text-gray-200">Copied</span>
//             ) : (
//               <FaCopy className="w-4 h-4 bg-black bg-opacity-25 text-gray-200 text-xl inline-flex items-center justify-center rounded-md shadow-shadowOne hover:bg-opacity-40 hover:-translate-y-1 transition-all hover:text-designColor cursor-pointer duration-300" />
//             )}
//           </button>
//         </p>

//         {/* Email Section with Copy Button */}
//         <p className="text-base text-gray-400 flex items-center gap-2">
//           Email:
//           <span className="text-lightText">contacttodeepakdas@gmail.com</span>
//           <button
//             onClick={() =>
//               copyToClipboard("contacttodeepakdas@gmail.com", "email")
//             }
//             className="text-sm font-bold text-gray-200 underline ml-2"
//           >
//             {copiedEmail ? (
//               <span className="text-gray-200">Copied</span>
//             ) : (
//               <FaCopy className="w-4 h-4 bg-black bg-opacity-25 text-gray-200 text-xl inline-flex items-center justify-center rounded-md shadow-shadowOne hover:bg-opacity-40 hover:-translate-y-1 transition-all hover:text-designColor cursor-pointer duration-300" />
//             )}
//           </button>
//         </p>
//       </div>
//       <div className="flex flex-col gap-4">
//         <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
//         <div className="flex gap-4">
//           <span className="bannerIcon">
//             <FaLinkedin />
//           </span>
//           <span className="bannerIcon">
//             <FaGithub />
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactLeft;

import React, { useState } from "react";
import { contactImg } from "../../assets";
import { FaLinkedin, FaGithub, FaCopy } from "react-icons/fa";

const ContactLeft = () => {
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === "phone") {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    } else if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    }
  };

  return (
    <div className="w-full lg:w-1/2 bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        src={contactImg}
        alt="img"
        className="w-full h-64 object-cover rounded-lg mb-2"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Deepak Das</h3>
        <p className="text-lg font-normal text-gray-400">Frontend Developer</p>
        <p className="text-base text-gray-400 tracking-wide">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam, omnis!
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone:
          <span className="text-lightText">+917042917613</span>
          <button
            onClick={() => copyToClipboard("+917042917613", "phone")}
            className="text-sm text-gray-200 font-bold underline ml-2"
          >
            {copiedPhone ? (
              <span className="text-gray-200">Copied</span>
            ) : (
              <FaCopy className="w-4 h-4" />
            )}
          </button>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email:
          <span className="text-lightText">contacttodeepakdas@gmail.com</span>
          <button
            onClick={() =>
              copyToClipboard("contacttodeepakdas@gmail.com", "email")
            }
            className="text-sm font-bold text-gray-200 underline ml-2"
          >
            {copiedEmail ? (
              <span className="text-gray-200">Copied</span>
            ) : (
              <FaCopy className="w-4 h-4" />
            )}
          </button>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <FaLinkedin />
          </span>
          <span className="bannerIcon">
            <FaGithub />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContactLeft;
