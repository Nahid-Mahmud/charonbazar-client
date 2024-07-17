import { useEffect, useRef, useState } from "react";
import { FaCartArrowDown, FaSearch } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import Logo from "../../assets/images/logo.jpeg";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks";
import { toast } from "react-toastify";

const Nav = () => {
  //  get user from context

  const { user } = useAuth();

  const [scroll, setscroll] = useState(false);
  // state for showing options on click profile icon
  const [showOptions, setShowOptions] = useState(false);

  // state for showing search bar on click search icon

  const [showSearch, setShowSearch] = useState(false);

  const ref = useRef(null);
  const searchRef = useRef(null);

  const { singoutUser } = useAuth();

  useEffect(() => {
    const handleScrool = () => {
      if (window.scrollY > 20) {
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

  // useEffect for closing dropdown on click outside

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setShowOptions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // useEffect for closing search bar on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSearch(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // function for signing out user

  const handleSignout = () => {
    singoutUser();
    toast?.success("User logged out successfully", {
      position: "top-right",
      autoClose: 3000,
    });
  };

  return (
    <div
      className={`${
        scroll ? "fixed w-full top-0 bg-white" : "bg-transparent text-black "
      } transition-all duration-300 ease-in-out z-50`}
    >
      <nav className="2xl:max-w-[86rem] max-w-[95vw] mx-auto px-2 rounded  ">
        <div className=" mx-auto px-2 md:px-0">
          <div className="flex items-center justify-between h-16">
            {/* Logo Section */}
            <div className="flex items-center gap-3">
              <img className="h-12 rounded-full w-auto" src={Logo} alt="Logo" />
              <span className="text-5xl font-bold text-[#3d8ec7]">CB</span>
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
                    ref={searchRef}
                    id="search"
                    className={`xl:w-[35rem] md:hidden  lg:w-[25rem] absolute  top-6 -left-36  pl-10 pr-3 py-2 border  rounded-md leading-5 placeholder-gray-500 focus:outline-none   focus:bg-white focus:border-gray-300 focus:placeholder-gray-400 sm:text-sm  ease-in-out transition-opacity duration-300

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
              {user && (
                <div ref={ref}>
                  {user?.photoURL ? (
                    <img
                      onClick={() => setShowOptions((prev) => !prev)}
                      className="md:h-10 md:w-10 h-6 w-6  rounded-full cursor-pointer"
                      src={user?.photoURL}
                      alt=""
                    />
                  ) : (
                    <CgProfile
                      onClick={() => setShowOptions((prev) => !prev)}
                      className="md:text-3xl text-2xl cursor-pointer"
                    />
                  )}
                </div>
              )}
              {/* dropdown on click profile icon */}

              <div
                className={`absolute transition-opacity duration-300 top-11 md:-left-14 -left-20 ${
                  showOptions ? "opacity-100" : "opacity-0"
                } ${scroll ? "border-0" : "border rounded overflow-hidden"}`}
              >
                <ul className="w-36 flex flex-col bg-white gap-3  rounded py-2  px-2 mt-3 overflow-hidden">
                  <li className=" px-3 py-2 rounded-md drop-shadow-md border border-gray-400  cursor-pointer transition-all hover:scale-95 duration-150">
                    My Profile
                  </li>
                  <li className=" px-3 py-2 rounded-md drop-shadow-md border border-gray-400  cursor-pointer transition-all hover:scale-95 duration-150">
                    Settings
                  </li>
                  <li
                    onClick={handleSignout}
                    className=" px-3 py-2 rounded-md drop-shadow-md border border-gray-400  cursor-pointer transition-all hover:scale-95 duration-150"
                  >
                    Logout
                  </li>
                </ul>
              </div>

              {!user && (
                <>
                  <Link to={"/login"}>
                    <button className=" pr-4 border-r-2 ">Login</button>
                  </Link>
                  {/* <p className="text-gray-400">|</p> */}
                  <Link to={"/signup"}>
                    <button className="">Signup</button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
