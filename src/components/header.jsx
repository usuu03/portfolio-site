import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header>
      <div className="flex w-full justify-between items-center p-4 md:p-6">
        {/* Left Side: Site Name */}
        <div className="flex items-center">
          <span className="text-gray-700 text-lg font-semibold">
            Usu's Portfolio
          </span>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button
            className="focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6 text-gray-800"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <nav
          className={`${
            isMenuOpen ? "block" : "hidden"
          } absolute top-16 left-0 w-full  md:static md:flex md:w-auto md:space-x-8 md:items-center`}
        >
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 text-center md:text-left p-4 md:p-0">
            <li>
              <Link
                to="/"
                className="text-gray-600 hover:text-gray-900 transition duration-200"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className="text-gray-600 hover:text-gray-900 transition duration-200"
              >
                Projects
              </Link>
            </li>
            {/*
              Uncomment if you want an About Me section
              <li>
                <Link
                  to="/about"
                  className="text-gray-600 hover:text-gray-900 transition duration-200"
                >
                  About Me
                </Link>
              </li>
            */}
          </ul>
        </nav>

        {/* Right Side: Contact Button */}
        <div className="hidden md:block">
          <a
            href="mailto:usunobu.omijie@gmail.com"
            aria-label="Contact me via email"
          >
            <button
              className="bg-gray-800 px-4 py-2 text-white hover:bg-gray-700 transition duration-200"
              id="contact"
            >
              Contact Me
            </button>
          </a>
        </div>
      </div>

      {/* Mobile Contact Button */}
      {isMenuOpen && (
        <div className="p-4 text-center md:hidden">
          <a href="mailto:usunobu.omijie@gmail.com">
            <button
              className="bg-gray-800 px-4 py-2 text-white hover:bg-gray-700 transition duration-200 w-full"
              id="contact"
            >
              Contact Me
            </button>
          </a>
        </div>
      )}
    </header>
  );
}
