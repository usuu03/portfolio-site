import React from "react";

export default function InfoSection() {
  return (
    <div className="bg-customGray items-center px-4" id="profile">
      <div className="grid grid-cols-2 space-x-8 mx-3 py-10">
        {/* Work Experience Section */}
        <div>
          <h3 className="text-3xl pb-6 font-semibold">Working Experience</h3>
          <ul className="space-y-3">
            <li className="border-b">
              <p>
                Junior Software Developer at <b>Techary</b>
              </p>
              <span className="text-sm text-gray-500">
                September 2024 - Present
              </span>
            </li>
            <li className="border-b">
              <p>
                Busser/Food Runner at <b>Big Easy</b>{" "}
              </p>
              <span className="text-sm text-gray-500">
                July 2023 - January 2024
              </span>
            </li>
            <li className="border-b ">
              <p>
                Packaging Assistant at <b>Krispy Kreme</b>
              </p>
              <span className="text-sm text-gray-500">
                June 2022 - September 2022
              </span>
            </li>
          </ul>
        </div>

        {/* Skills, Tools and Certifications Section */}
        <div>
          <h3 className="text-3xl pb-6 font-semibold">
            Skills, Tools and Certifications
          </h3>
          <ul className="space-y-3">
            <li className="border-b no-underline">
              <p>Programming Languages</p>
              <span className="text-sm text-gray-500">
                Python, JavaScript, Java, SQL, HTML/CSS
              </span>
            </li>
            <li className="border-b ">
              <p>Tools</p>
              <span className="text-sm text-gray-500">
                Django, Flask, NodeJS, React, MySQL, PostgreSQL, Git,
                Make.com(Integromat), Wordpress
              </span>
            </li>
            <li className="border-b ">
              <p>Certifications</p>
              <span className="text-sm text-gray-500">
                Amazon Web Services Certified Cloud Practicioner
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
