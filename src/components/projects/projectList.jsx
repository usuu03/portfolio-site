import React from "react";
import helpingHand from "../../images/helpingHand.png";
import pladies from "../../images/pladies.png";
import getWebsited from "../../images/getwebsited.png";
import platformer from "../../images/platformer_game.png";

export default function Projects() {
  return (
    <div className="bg-customGray items-center px-4 py-12">
      <h3 className="text-3xl font-bold text-center mb-10">
        Projects I Have Worked On.
      </h3>
      <div className="grid gap-12 md:grid-cols-3 mx-6">
        {/* Project 1 */}
        <div className="flex-col text-center">
          <a
            href="https://github.com/usuu03/Crowdfunding-Platform"
            className="group block"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={helpingHand}
              alt="Crowdfunding Platform"
              className="shadow-lg object-cover w-full h-64 bg-gray-200 group-hover:scale-105 transition-transform duration-300"
            />
          </a>

          <span className="text-sm text-gray-500">Crowdfunding Platform</span>
        </div>

        {/* Project - Prudent Ladies Club UK */}
        <div className="flex-col text-center">
          <a
            href="https://prudentladiesclub.co.uk"
            className="group block"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={pladies}
              alt=""
              className="shadow-lg object-cover w-full h-64 bg-gray-200 group-hover:scale-105 transition-transform duration-300"
            />
          </a>

          <span className="text-sm text-gray-500">
            Prudent Ladies Club Site
          </span>
        </div>

        {/* Project - Get Websited */}
        <div className="flex-col text-center">
          <a
            href="https://getwebsited.co.uk"
            className="group block"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={getWebsited}
              alt=""
              className="shadow-lg object-cover w-full h-64 bg-gray-200 group-hover:scale-105 transition-transform duration-300"
            />
          </a>
          <span className="text-sm text-gray-500">Get Websited</span>
        </div>

        {/* Project - 2D Platformer Game */}
        <div className="flex-col text-center">
          <a
            href="https://drive.google.com/file/d/131UqVqYbaqaJbJN5WtWqNC33Cz0JeCL3/view"
            className="group block"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={platformer}
              alt=""
              className="shadow-lg object-cover w-full h-64 bg-gray-200 group-hover:scale-105 transition-transform duration-300"
            />
          </a>
          <span className="text-sm text-gray-500">2D Platformer Game</span>
        </div>
      </div>
    </div>
  );
}
