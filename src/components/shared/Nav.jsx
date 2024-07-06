import { useEffect, useState } from "react";
import { FaCartArrowDown, FaSearch } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import Logo from "../../assets/images/logo.jpeg";

const Nav = () => {
  const [scroll, setscroll] = useState(false);
  // state for showing options on click profile icon
  const [showOptions, setShowOptions] = useState(false);

  // state for showing search bar on click search icon

  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    const handleScrool = () => {
      if (window.scrollY > 50) {
        setscroll(true);
      } else {
        setscroll(false);
      }
    };

    window.addEventListener("scroll", handleScrool);

    return () => {
      window.removeEventListener("scroll", handleScrool);
    };
  }, []);

  return (
    <div
      className={`${
        scroll ? "bg-black text-white fixed w-full top-0" : "bg-transparent text-black"
      } transition-colors duration-300`}
    >
      <nav className="  xl:max-w-[86rem] max-w-[95vw] mx-auto  ">
        <div className=" mx-auto px-2 md:px-0">
          <div className="flex items-center justify-between h-16">
            {/* Logo Section */}
            <div className="">
              <img className="h-12 rounded-full w-auto" src={Logo} alt="Logo" />
            </div>

            {/* Large Search Bar Section */}
            <div className="flex justify-center md:ml-44 lg:justify-end">
              <div className="flex-1">
                <label htmlFor="search" className="sr-only">
                  Search
                </label>
                <div className="relative">
                  <div className="absolute hidden inset-y-0 left-0 pl-3 md:flex items-center pointer-events-none">
                    <FaSearch className={"text-black"} />
                  </div>
                  <div
                    onClick={() => setShowSearch((prev) => !prev)}
                    className="md:hidden absolute inset-y-0 left-0 pl-3 flex items-center "
                  >
                    <FaSearch className={"text-black text-2xl -ml-4"} />
                  </div>
                  <input
                    id="search"
                    className={`" xl:w-[35rem] md:hidden  lg:w-[25rem] absolute top-6  pl-10 pr-3 py-2 border  rounded-md leading-5 placeholder-gray-500 focus:outline-none   focus:bg-white focus:border-gray-300 focus:placeholder-gray-400 sm:text-sm  duration-150 ease-in-out transition-opacity duration-300"

                    ${showSearch ? "opacity-100" : "opacity-0"}

                    `}
                    placeholder="Search"
                  />

                  <input
                    id="search"
                    className=" xl:w-[35rem] lg:w-[25rem] hidden md:inline-block  pl-10 pr-3 py-2 border  rounded-md leading-5 placeholder-gray-500 focus:outline-none   focus:bg-white focus:border-gray-300 focus:placeholder-gray-400 sm:text-sm transition duration-150 ease-in-out"
                    placeholder="Search"
                  />
                </div>
              </div>
            </div>

            {/* Icons and Buttons Section */}
            <div className="flex relative items-center justify-center gap-5 ">
              <FaCartArrowDown className="md:text-3xl text-2xl cursor-pointer" />
              <CgProfile
                onClick={() => setShowOptions((prev) => !prev)}
                className="md:text-3xl text-2xl cursor-pointer"
              />
              {/* dropdown on click profile icon */}

              <div
                className={`absolute transition-opacity duration-300 top-10 left-10 ${
                  showOptions ? "opacity-100" : "opacity-0"
                } `}
              >
                <ul className="w-36 flex flex-col ">
                  <li className="bg-red-300 px-3 py-2 rounded-md border-b drop-shadow-md border-gray-400">
                    My Profile
                  </li>
                  <li className=" px-3 py-2 rounded-md border-b drop-shadow-md border-gray-400">Settings</li>
                  <li className=" px-3 py-2 rounded-md border-b drop-shadow-md border-gray-400">Logout</li>
                </ul>
              </div>

              <button className=" pr-4 border-r-2 ">Login</button>
              {/* <p className="text-gray-400">|</p> */}
              <button className="">Register</button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
