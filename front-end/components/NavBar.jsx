import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme:dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const changeTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const [navbarOpen, setNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <header aria-label="Site Header" className="bg-white dark:bg-black">
      <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <Link
              to="/"
              className="block font-mono text-2xl text-black dark:text-myOrange"
              href="/"
            >
              <h1>CODE BITES</h1>
            </Link>
          </div>

          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Site Nav" className="hidden md:block">
              <ul className="flex items-center gap-6 -mr-6 text-sm">
                <li>
                  <Link to="/">
                    <button className="relative font-medium text-black dark:text-myOrange before:absolute before:-bottom-1 before:h-0.5 before:w-full before:scale-x-0 dark:before:bg-myOrange before:bg-black before:transition hover:before:scale-x-100">
                      Home
                    </button>
                  </Link>
                </li>

                <li>
                  <Link
                    to="/create"
                    className="relative font-medium text-black dark:text-myOrange before:absolute before:-bottom-1 before:h-0.5 before:w-full before:scale-x-0 dark:before:bg-myOrange before:bg-black before:transition hover:before:scale-x-100"
                    href="/"
                  >
                    Create Blog
                  </Link>
                </li>

                <li>
                  <Link
                    to="/blog"
                    className="relative font-medium text-black dark:text-myOrange before:absolute before:-bottom-1 before:h-0.5 before:w-full before:scale-x-0 dark:before:bg-myOrange before:bg-black before:transition hover:before:scale-x-100"
                    href="/"
                  >
                    All Blogs
                  </Link>
                </li>

                {/* <li>
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/9308/9308891.png"
                    alt=""
                    className="h-7"
                  />
                </li> */}
              </ul>
            </nav>

            <div className="flex items-center gap-2 sm:gap-4">
              <div className="sm:flex sm:gap-4">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/9308/9308891.png"
                  alt=""
                  className="h-7"
                />
              </div>

              <div className="scale-75 flex items-center text-black dark:text-myOrange -mr-2 md:-mx-1">
                <label className="swap swap-rotate">
                  <input type="checkbox" />

                  <svg
                    className="swap-off fill-current w-10 h-10"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    onClick={changeTheme}
                  >
                    <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                  </svg>

                  <svg
                    className="swap-on fill-current w-10 h-10"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    onClick={changeTheme}
                  >
                    <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                  </svg>
                </label>
              </div>

              <div className="sm:flex sm:gap-4">
                <div className="hidden sm:flex">
                  <Link
                    to="/login"
                    className="bg-myOrange px-5 py-2.5 text-sm font-medium text-black shadow transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:bg-orange-400 duration-200"
                    href="/"
                  >
                    Login
                  </Link>
                </div>
                <div className="hidden sm:flex">
                  <Link
                    to="/registration"
                    className="bg-white dark:bg-black px-5 py-2.5 text-sm font-medium text-myOrange outline-2 outline button hover:text-black"
                    href="/"
                  >
                    Register
                  </Link>
                </div>
              </div>

              <div className="block md:hidden">
                <button
                  className="p-2 text-black transition rounded bg-myOrange hover:text-black/75"
                  onClick={toggleNavbar}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hamburger menu content */}
      <div
        className={`md:hidden ${
          navbarOpen
            ? "relative flex justify-end z-10 animate fadeIn navAnimation"
            : "hidden"
        }`}
        tabIndex="0"
      >
        <ul className="absolute w-[60%] space-y-4 text-center bg-white dark:bg-black flex flex-col justify-start pb-1">
          <li>
            <button className="relative font-medium text-black dark:text-myOrange before:absolute before:-bottom-1 before:h-0.5 before:w-full before:scale-x-0 dark:before:bg-myOrange before:bg-black before:transition hover:before:scale-x-100">
              Home
            </button>
          </li>
          <li>
            <Link
              to="/create"
              className="relative font-medium text-black dark:text-myOrange before:absolute before:-bottom-1 before:h-0.5 before:w-full before:scale-x-0 dark:before:bg-myOrange before:bg-black before:transition hover:before:scale-x-100"
            >
              Create Blog
            </Link>
          </li>
          <li>
            <a className="relative font-medium text-black dark:text-myOrange before:absolute before:-bottom-1 before:h-0.5 before:w-full before:scale-x-0 dark:before:bg-myOrange before:bg-black before:transition hover:before:scale-x-100">
              All Blog
            </a>
          </li>
        </ul>
        <div className="absolute flex justify-center w-[60%] gap-5 items-end top-[87px] py-10 pb-7 mt-5 dark:bg-black bg-white">
          <div className="sm:hidden">
            <Link
              to="/registration"
              className="bg-white dark:bg-black px-5 py-2.5 text-sm font-medium text-myOrange outline-2 outline"
              href="/"
            >
              Register
            </Link>
          </div>
          <div className="sm:hidden">
            <Link
              to="/login"
              className="bg-myOrange px-5 py-2.5 text-sm font-medium text-black shadow transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:bg-orange-400 duration-200"
              href="/"
            >
              Login
            </Link>
          </div>
          {/* <div className="flex items-center justify-center gap-1">
            <img
              src="https://cdn-icons-png.flaticon.com/128/9308/9308891.png"
              alt=""
              className="h-7"
            />
            <span  className="relative font-medium text-black dark:text-myOrange before:absolute before:-bottom-1 before:h-0.5 before:w-full before:scale-x-0 dark:before:bg-myOrange before:bg-black before:transition hover:before:scale-x-100">
              Profile
            </span>
          </div> */}
        </div>
      </div>
    </header>
  );
};

export default NavBar;
