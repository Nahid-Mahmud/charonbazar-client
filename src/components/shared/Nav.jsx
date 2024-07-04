import { useEffect, useState } from "react";
import { FaCartArrowDown, FaSearch } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import Logo from "../../assets/images/logo.jpeg";

const Nav = () => {
  const [scroll, setscroll] = useState(false);

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
      <nav className="  max-w-[88rem] mx-auto ">
        <div className=" mx-auto px-2 md:px-0">
          <div className="flex items-center justify-between h-16">
            {/* Logo Section */}
            <div className="">
              <img className="h-12 rounded-full w-auto" src={Logo} alt="Logo" />
            </div>

            {/* Large Search Bar Section */}
            <div className="flex justify-center ml-44 lg:justify-end">
              <div className="flex-1">
                <label htmlFor="search" className="sr-only">
                  Search
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaSearch className={"text-black"} />
                  </div>
                  <input
                    id="search"
                    className=" w-[35rem]  pl-10 pr-3 py-2 border  rounded-md leading-5 placeholder-gray-500 focus:outline-none   focus:bg-white focus:border-gray-300 focus:placeholder-gray-400 sm:text-sm transition duration-150 ease-in-out"
                    placeholder="Search"
                  />
                </div>
              </div>
            </div>

            {/* Icons and Buttons Section */}
            <div className="flex items-center justify-center gap-5 ">
              <FaCartArrowDown className="text-2xl cursor-pointer" />
              <CgProfile className="text-2xl" />

              <button className=" ">Login</button>
              <p className="text-gray-400">|</p>
              <button className="">Register</button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
