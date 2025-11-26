import React from "react";
import usuImg from "../../images/usu_profile.jpeg";
import gitIcon from "../../images/github.svg";
import linkIcon from "../../images/linkedin.svg";

export default function Hero() {
  return (
    <div className="pt-10 px-4 items-center grid md:grid-cols-2 gap-8 justify-center pb-60 bg-[#F4F5F0]">
      {/* Name and Profile Section */}
      <div className="p-6">
        <img src={usuImg} alt="" className="rounded-full h-16 w-20 mx-4 " />

        <h3 className="text-5xl p-6">
          Hello!
          <br /> I'm Usunobu Edeaghe
        </h3>
      </div>

      {/* Call to Action Section */}
      <div className="p-6">
        <h3 className="text-2xl pb-3">
          A Junior Software Developer based in <br /> London, England
        </h3>
        <span className="text-gray-500 text-sm">
          Dedicated to developing software that empowers users and drives
          innovation.
        </span>

        <div className="pt-10 space-x-8 flex">
          <a
            href="https://github.com/usuu03"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={gitIcon} alt="Github Icon" className="h-12 w-20" />
          </a>
          <a
            href="www.linkedin.com/in/usunobu-edeaghe-omijie-86708519b"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkIcon} alt="" className="h-11 w-20" />
          </a>
        </div>
      </div>
    </div>
  );
}
