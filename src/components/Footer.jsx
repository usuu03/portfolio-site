import React from "react";
import { Icon } from "@blueprintjs/core";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto px-4">
        {/* Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">About Me</h3>
            <p className="text-sm">
              I'm currently a Junior Software Developer based in London,
              specializing in full-stack development and delivering innovative
              solutions for businesses and users. Let's build something amazing
              together!
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#services"
                  className="hover:text-white transition duration-300"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="hover:text-white transition duration-300"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-white transition duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Get in Touch
            </h3>
            <ul className="space-y-2">
              <li>
                Email:{" "}
                <a
                  href="mailto:usunobu.omijie@gmail.com"
                  className="hover:text-white transition duration-300"
                >
                  usunobu.omijie@gmail.com
                </a>
              </li>

              <li>
                Phone:{" "}
                <a
                  href="tel:+447490773218"
                  className="hover:text-white transition duration-300"
                >
                  +44 7490 773218
                </a>
              </li>
            </ul>

            <div className="flex space-x-4 mt-4">
              {/* Social Links */}
              <a
                href="https://github.com/usuu03"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <Icon icon="git-repo" color="white" />
              </a>
              <a
                href="https://www.linkedin.com/in/usunobu-edeaghe-omijie-86708519b"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <Icon icon="link" color="white" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Usunobu Edeaghe. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
