import React, { useState } from "react";
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { logo } from "../../assets/index";
import { navLinksdata } from "../../constants/index";
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="w-full h-24 sticky top-0 z-50 mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600 bg-bodyColor">
      <div className="flex justify-center items-center gap-2">
        <img src={logo} alt="logo" className="w-[4.5rem]" />
        <h2 className="text-2xl font-bold text-gray-400">Deepak Das</h2>
      </div>
      <div>
        <ul className="hidden md:inline-flex gap-6 lg:gap-10 items-center">
          {navLinksdata.map(({ _id, title, link }) => (
            <li
              className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
              key={_id}
            >
              <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
        <span
          onClick={() => setShowMenu(true)}
          className="text-xl mdl:hidden bg-black w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer"
        >
          <FiMenu />
        </span>
        {showMenu && (
          <div className="w-[80%] h-screen overflow-scroll absolute -left-6 top-0 bg-gray-900 p-5 scrollbar-hide">
            <div className="flex flex-col gap-8 py-2 relative">
              <div className="flex  items-center gap-2 border-b-[1px] border-b-gray-600 pb-2">
                <img src={logo} alt="logo" className="w-[4.5rem]" />
                <h2 className="text-2xl font-bold text-gray-400">Deepak Das</h2>
              </div>
              <ul className=" h-full flex flex-col gap-5 px-5">
                {navLinksdata.map(({ _id, title, link }) => (
                  <li
                    className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
                    key={_id}
                  >
                    <Link
                      onClick={() => setShowMenu(false)}
                      activeClass="active"
                      to={link}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      {title}
                    </Link>
                  </li>
                ))}
              </ul>
              <span
                onClick={() => setShowMenu(false)}
                className="absolute top-10 right-4 text-gray-400 hover:text-designColor duration-300 text-2xl cursor-pointer"
              >
                <MdClose />
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
