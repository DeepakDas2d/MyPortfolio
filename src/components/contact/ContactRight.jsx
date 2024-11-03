// import React, { useState, useEffect } from "react";
// import ErrMsg from "../layouts/ErrMsg";
// import SuccessMsg from "../layouts/SuccessMsg";

// const ContactRight = () => {
//   const [username, setUsername] = useState("");
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [email, setEmail] = useState("");
//   const [subject, setSubject] = useState("");
//   const [message, setMessage] = useState("");
//   const [errMsg, setErrMsg] = useState("");
//   const [successMsg, setSuccessMsg] = useState("");
//   const [isSending, setIsSending] = useState(false);

//   // ====== Email Validation start here ======
//   const emailValidation = () => {
//     return String(email)
//       .toLocaleLowerCase()
//       .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
//   };

//   // ========== Email Validation end here ================

//   const handleSend = (e) => {
//     e.preventDefault();
//     if (username === "") {
//       setErrMsg("Username is required!");
//     } else if (phoneNumber === "") {
//       setErrMsg("PhoneNumber is required!");
//     } else if (email === "") {
//       setErrMsg("Please give your email!");
//     } else if (!emailValidation(email)) {
//       setErrMsg("Give a valid Email!");
//     } else if (subject === "") {
//       setErrMsg("Please give your Subject!");
//     } else if (message === "") {
//       setErrMsg("Message is required!");
//     } else {
//       setErrMsg(""); // Clear error messages after successful validation
//       setIsSending(true); // Set the sending state
//       setTimeout(() => {
//         setSuccessMsg("Message sent successfully!");
//         setIsSending(false); // Reset sending state after success
//         // Clear the form
//         setUsername("");
//         setEmail("");
//         setPhoneNumber("");
//         setSubject("");
//         setMessage("");
//       }, 2000);
//     }
//   };

//   useEffect(() => {
//     if (successMsg) {
//       const timer = setTimeout(() => {
//         setSuccessMsg(""); // Clear the message after 3 seconds
//       }, 3000);

//       return () => clearTimeout(timer); // Cleanup if component unmounts
//     }
//   }, [successMsg]); // Only run when successMsg changes

//   return (
//     <div className="w-[60%] h-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col gap-8 p-8 rounded-lg shadow-shadowOne">
//       <form className="w-full flex flex-col gap-6 py-2">
//         <div className=" w-full flex gap-10">
//           <div className="w-1/2 flex flex-col gap-4">
//             <label className="text-sm text-gray-400 uppercase tracking-wide">
//               YOUR NAME
//             </label>
//             <input
//               type="text"
//               onChange={(e) => setUsername(e.target.value)}
//               value={username}
//               className={`${
//                 errMsg === "Username is required!" && "outline-designColor"
//               } contactInput`}
//             />
//           </div>
//           <div className="w-1/2 flex flex-col gap-4">
//             <label className="text-sm text-gray-400 uppercase tracking-wide">
//               phone number
//             </label>
//             <input
//               type="tel"
//               onChange={(e) => setPhoneNumber(e.target.value)}
//               value={phoneNumber}
//               className={`${
//                 errMsg === "PhoneNumber is required!" && "outline-designColor"
//               } contactInput`}
//             />
//           </div>
//         </div>
//         <div className="flex flex-col gap-4">
//           <label className="text-sm text-gray-400 uppercase tracking-wide">
//             Email
//           </label>
//           <input
//             type="email"
//             onChange={(e) => setEmail(e.target.value)}
//             value={email}
//             className={`${
//               errMsg === "Please give your email!" && "outline-designColor"
//             } contactInput`}
//           />
//         </div>
//         <div className="flex flex-col gap-4">
//           <label className="text-sm text-gray-400 uppercase tracking-wide">
//             Subject
//           </label>
//           <input
//             type="text"
//             onChange={(e) => setSubject(e.target.value)}
//             value={subject}
//             className={`${
//               errMsg === "Please give your Subject!" && "outline-designColor"
//             } contactInput`}
//           />
//         </div>
//         <div className="flex flex-col gap-4">
//           <label className="text-sm text-gray-400 uppercase tracking-wide">
//             Message
//           </label>
//           <textarea
//             onChange={(e) => setMessage(e.target.value)}
//             value={message}
//             className={`${
//               errMsg === "Message is required!" && "outline-designColor"
//             } contactTextArea`}
//             rows={8}
//             cols={30}
//           ></textarea>
//         </div>

//         <div>
//           <button
//             onClick={handleSend}
//             className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent"
//           >
//             {isSending ? "Sending Message..." : "Send Message"}
//           </button>
//         </div>
//         {errMsg && <ErrMsg errorMsg={errMsg} />}
//         {successMsg && <SuccessMsg successMsg={successMsg} />}
//       </form>
//     </div>
//   );
// };

// export default ContactRight;

import React, { useState, useEffect } from "react";
import ErrMsg from "../layouts/ErrMsg";
import SuccessMsg from "../layouts/SuccessMsg";

const ContactRight = () => {
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [isSending, setIsSending] = useState(false);

  // Email validation function
  const emailValidation = () => {
    return String(email)
      .toLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };

  // Handle form submission
  const handleSend = (e) => {
    e.preventDefault();
    if (username === "") {
      setErrMsg("Username is required!");
    } else if (phoneNumber === "") {
      setErrMsg("Phone number is required!");
    } else if (email === "") {
      setErrMsg("Please provide your email!");
    } else if (!emailValidation(email)) {
      setErrMsg("Please provide a valid email!");
    } else if (subject === "") {
      setErrMsg("Please provide a subject!");
    } else if (message === "") {
      setErrMsg("Message is required!");
    } else {
      setErrMsg(""); // Clear error messages
      setIsSending(true); // Indicate that the message is sending
      setTimeout(() => {
        setSuccessMsg("Message sent successfully!");
        setIsSending(false); // Reset sending state after success
        // Clear the form fields
        setUsername("");
        setEmail("");
        setPhoneNumber("");
        setSubject("");
        setMessage("");
      }, 2000);
    }
  };

  // Clear success message after 3 seconds
  useEffect(() => {
    if (successMsg) {
      const timer = setTimeout(() => {
        setSuccessMsg(""); // Clear the message after 3 seconds
      }, 3000);

      return () => clearTimeout(timer); // Cleanup if component unmounts
    }
  }, [successMsg]);

  return (
    <div className="w-full lg:w-1/2 py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col gap-8 p-8 rounded-lg shadow-shadowOne">
      <form className="w-full flex flex-col gap-6 py-2">
        <div className="w-full flex flex-col gap-4">
          <label className="text-sm text-gray-400 uppercase tracking-wide">
            YOUR NAME
          </label>
          <input
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            className={`contactInput ${
              errMsg === "Username is required!" && "outline-designColor"
            }`}
            required
          />
        </div>

        <div className="w-full flex flex-col gap-4">
          <label className="text-sm text-gray-400 uppercase tracking-wide">
            PHONE NUMBER
          </label>
          <input
            type="tel"
            onChange={(e) => setPhoneNumber(e.target.value)}
            value={phoneNumber}
            className={`contactInput ${
              errMsg === "Phone number is required!" && "outline-designColor"
            }`}
            required
          />
        </div>

        <div className="w-full flex flex-col gap-4">
          <label className="text-sm text-gray-400 uppercase tracking-wide">
            EMAIL
          </label>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className={`contactInput ${
              errMsg === "Please provide your email!" && "outline-designColor"
            }`}
            required
          />
        </div>

        <div className="w-full flex flex-col gap-4">
          <label className="text-sm text-gray-400 uppercase tracking-wide">
            SUBJECT
          </label>
          <input
            type="text"
            onChange={(e) => setSubject(e.target.value)}
            value={subject}
            className={`contactInput ${
              errMsg === "Please provide a subject!" && "outline-designColor"
            }`}
            required
          />
        </div>

        <div className="w-full flex flex-col gap-4">
          <label className="text-sm text-gray-400 uppercase tracking-wide">
            MESSAGE
          </label>
          <textarea
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            className={`contactTextArea ${
              errMsg === "Message is required!" && "outline-designColor"
            }`}
            rows={8}
            required
          ></textarea>
        </div>

        <div>
          <button
            onClick={handleSend}
            className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent"
          >
            {isSending ? "Sending Message..." : "Send Message"}
          </button>
        </div>

        {errMsg && <ErrMsg errorMsg={errMsg} />}
        {successMsg && <SuccessMsg successMsg={successMsg} />}
      </form>
    </div>
  );
};

export default ContactRight;
