import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { AuthContext } from "../Provider/AuthProvider";
import { useContext, useEffect, useState } from "react";

const Navbar = () => {
  const { user, userSignOut } = useContext(AuthContext);

  // State to manage the theme
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light" // Default to light theme
  );

  // State to manage dropdown visibility
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Update the theme dynamically
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme); // Save the selected theme in local storage
  }, [theme]);

  // Toggle theme between light and dark
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const navbarLink = (
    <>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/allArtifacts"}>All Artifacts</NavLink>
      <NavLink to={"/addArtifacts"}>Add Artifacts</NavLink>
      <NavLink to={"/contact"}>Contact Us</NavLink>
      <NavLink to={"/faq"}>FAQ</NavLink>
      <NavLink to={"/testimonials"}>Testimonials</NavLink>
    </>
  );

  return (
    <div className="navbar  bg-gray-800 text-yellow-400 shadow-md">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-gray-700  text-yellow-400 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <div className="flex flex-col gap-2">{navbarLink}</div>
          </ul>
        </div>
        <a className="btn btn-ghost text-yellow-400 text-2xl font-bold">
          Antiquify
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <div className="flex gap-4 font-normal">{navbarLink}</div>
        </ul>
      </div>
      <div className="navbar-end flex items-center">
        {/* Theme Toggle */}
        <label className="swap swap-rotate mr-3">
          <input
            type="checkbox"
            onChange={toggleTheme}
            checked={theme === "dark"}
          />
          <svg
            className="swap-off h-8 w-8 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>
          <svg
            className="swap-on h-8 w-8 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        </label>

        {/* User Authentication */}
        {!user ? (
          <div className="flex gap-2">
            <NavLink
              to={"/login"}
              className="btn text-black bg-yellow-500 hover:bg-yellow-600 text-sm py-1 px-2 sm:text-base sm:py-2 sm:px-5"
            >
              Login
            </NavLink>
            <NavLink
              to={"/register"}
              className="btn text-black  bg-yellow-500 hover:bg-yellow-600 border-none text-sm py-1 px-2 sm:text-base sm:py-2 sm:px-5"
            >
              Register
            </NavLink>
          </div>
        ) : (
          <div className="relative">
            {/* User Profile */}
            <div
              onClick={toggleDropdown}
              className="cursor-pointer flex items-center relative group"
            >
              <img
                className="w-8 h-8 sm:w-11 sm:h-11 rounded-full"
                src={user.photoURL}
                alt="User Profile"
              />
              {/* Show username on hover */}
              <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 translate-y-[-5px] px-3 py-1 bg-black text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {user.displayName}
              </span>
            </div>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 bg-gray-700  text-yellow-400 rounded shadow-lg z-10">
                <ul className="menu p-2">
                  <li>
                    <NavLink to={"/myArtifacts"}>My_Artifacts</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/likedArtifacts"}>Liked_Artifacts</NavLink>
                  </li>
                  <li>
                    <button
                      onClick={userSignOut}
                      className="mx-auto bg-slate-800 dark:text-yellow-400 text-sm mt-2 py-1 px-3"
                    >
                      Sign Out
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
