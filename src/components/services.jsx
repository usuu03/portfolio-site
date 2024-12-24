import React from "react";
import helpingHand from "../images/helpingHand.png";
import prudentLadies from "../images/pladies.png";
import make from "../images/make_example.png";

export default function Services() {
  return (
    <div className="bg-customGray px-6 py-12" id="services">
      <h3 className="text-2xl font-bold text-center mb-10">
        How I can Support Your Vision
      </h3>

      <div className="grid gap-12 md:grid-cols-2">
        {/* Full Stack Software Development  */}
        <div className="flex items-center">
          <div className="space-y-4">
            <h4 className="text-xl font-semibold">
              Full Stack Software Development
            </h4>
            <p className="text-gray-700">
              I specialize in delivering end-to-end software solutions by
              seamlessly integrating backend and frontend development. My focus
              is on building robust, scalable, and maintainable applications
              tailored to your specific needs.
            </p>
          </div>
        </div>
        <div>
          <a href="https://drive.google.com/file/d/1gj2lv2S1QhR1OoAbUpX71sAndQ6fWghG/view">
            <img
              src={helpingHand}
              alt="Custom Software Solutions"
              className="shadow-lg object-cover w-full h-48 bg-gray-200"
            />
          </a>
        </div>

        {/* Web Design/Development Section */}
        <div className="flex items-center">
          <div className="space-y-4">
            <h4 className="text-xl font-semibold">Web Design & Development</h4>
            <p className="text-gray-700">
              Need a professional online presence? I design and develop visually
              appealing, user-friendly websites that not only showcase your
              brand but also drive customer engagement and business growth.
            </p>
          </div>
        </div>
        <div>
          <a href="https://prudentladiesclub.co.uk">
            <img
              src={prudentLadies}
              alt="Professional Website Design"
              className="rounded-lg shadow-lg object-cover w-full h-48 bg-gray-200"
            />
          </a>
        </div>

        {/* Automation and Workflow Optimization */}
        <div className="flex items-center">
          <div className="space-y-4">
            <h4 className="text-xl font-semibold">
              Automation & Workflow Optimization
            </h4>
            <p className="text-gray-700">
              I developed custom automation solutions to improve your business
              workflows. Whether it's using tools like Make.com or building
              custom Python scripts, I can help you save time increase
              productivity.
            </p>
          </div>
        </div>
        <div>
          <img
            src={make}
            alt="Automation and Workflow Optimization"
            className="shadow-lg object-cover w-full h-48 bg-gray-200"
          />
        </div>
      </div>
    </div>
  );
}
