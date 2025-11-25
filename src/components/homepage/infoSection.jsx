import React from "react";

export default function InfoSection() {
  return (
    <div className="bg-customGray px-4 py-10" id="profile">
      <div className="grid grid-cols-1 md:grid-cols-2 md:space-x-8 mx-3 gap-y-8">
        {/* Work Experience Section */}
        <div>
          <h3 className="text-3xl pb-6 font-semibold text-center md:text-left">
            Working Experience
          </h3>
          <ul className="space-y-6">
            <li className="border-b pb-2">
              <p>
                Graduate Developer at <b>Techary</b>
              </p>
              <span className="text-sm text-gray-500 block">
                October 2024 - November 2025
              </span>
            </li>
            <li className="border-b pb-2">
              <p>
                Junior Backend Developer at <b>Crimson Tide PLC</b>
              </p>
              <span className="text-sm text-gray-500 block">
                December 2025 - Present
              </span>
            </li>
          </ul>
        </div>

        {/* Skills, Tools and Certifications Section */}
        <div>
          <h3 className="text-3xl pb-6 font-semibold text-center md:text-left">
            Skills, Tools, and Certifications
          </h3>
          <ul className="space-y-6">
            <li className="border-b pb-2">
              <p>Programming Languages</p>
              <span className="text-sm text-gray-500 block">
                C#, Python, TypeScript, JavaScript, PHP, SQL, HTML/CSS
              </span>
            </li>
            <li className="border-b pb-2">
              <p>Tools</p>
              <span className="text-sm text-gray-500 block">
                .NET 9, Django, NodeJS, React, PostgreSQL, Git,
                Make.com (Integromat), Wordpress
              </span>
            </li>
            <li className="border-b pb-2">
              <p>Certifications</p>
              <span className="text-sm text-gray-500 block">
                Amazon Web Services Certified Cloud Practitioner
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
