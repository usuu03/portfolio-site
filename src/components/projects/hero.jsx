import React from "react";
import usuImg from "../../images/usu_profile.jpeg";
import gitIcon from "../../images/github.svg";
import linkIcon from "../../images/linkedin.svg";

export default function HeroProjects() {
  return (
    <div className="pt-10 pb-60 px-6 items-center grid md:grid-cols-2 gap-8 justify-center">
      {/* Profile and Intro Section */}
      <div className="text-center md:text-left space-y-6">
        <img
          src={usuImg}
          alt="Usunobu Edeaghe Profile"
          className="rounded-full h-16 w-20 mx-auto md:mx-0"
        />

        <p className="text-gray-600 text-lg">
          Explore my portfolio showcasing expertise in Full Stack Development,
          Web Design, and Automation.
        </p>
      </div>

      {/* Call to Action Section */}
      <div className="text-center space-y-4">
        <h2 className="text-2xl font-semibold">
          Transforming Ideas into Solutions
        </h2>
        <p className="text-gray-600">
          Let’s create exceptional software experiences together. Below are some
          of the projects that demonstrate my skills and commitment to quality.
        </p>
        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com/usuu03"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={gitIcon}
              alt="GitHub Profile"
              className="h-10 w-10 hover:opacity-80 transition"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/usunobu-edeaghe-omijie-86708519b"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={linkIcon}
              alt="LinkedIn Profile"
              className="h-10 w-10 hover:opacity-80 transition"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
