import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="flex w-full justify-between items-center p-8">
      {/** Left Side: Name and Role*/}
      <div className="flex items-center">
        <span className="text-gray-500 text-sm ml-2">Usu's Portfolio Site</span>
      </div>

      {/* Center: Navigation Links */}
      <div className="flex justify-center items-center flex-grow space-x-8">
        <Link>
          <p className="text-gray-600 hover:text-gray-900 transition duration-200">
            Home
          </p>
        </Link>
        <Link to="/projects">
          <p className="text-gray-600 hover:text-gray-900 transition duration-200">
            Projects
          </p>
        </Link>
        {/* <Link>
          <p className="text-gray-600 hover:text-gray-900 transition duration-200">
            About Me
          </p>
        </Link> */}
      </div>

      {/* Right: Contact Button */}
      <div className="ml-auto">
        <a href="mailto:usunobu.omijie@gmail.com">
          <button
            className="bg-gray-800 px-4 py-2 text-white hover:bg-gray-700 transition duration-200"
            id="contact"
          >
            Contact Me
          </button>
        </a>
      </div>
    </div>
  );
}
