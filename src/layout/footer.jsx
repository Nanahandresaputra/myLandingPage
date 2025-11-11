import React from "react";
import { FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";
import { useLocation, useNavigate } from "react-router-dom";

const Footer = () => {
  const connect = [
    {
      icon: <FaGithub />,
      label: "Github",
      link: "google.com",
    },
    {
      icon: <FaLinkedin />,
      label: "LinkedIn",
      link: "google.com",
    },
    {
      icon: <TfiEmail />,
      label: "nana20.jobs@gmail.com",
      link: "google.com",
    },
  ];

  const location = useLocation();

  const navigate = useNavigate();

  const handleScroll = (e) => {
    navigate("/");
    if (location.pathname === "/") {
      // setCurrent(e.key);
      const element = document.getElementById(e);
      const headerOffset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    } else {
      setTimeout(() => {
        // setCurrent(e.key);
        const element = document.getElementById(e);
        const headerOffset = 90;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }, 500);
    }
  };

  const navLinks = ["Home", "About Me", "Portofolios", "Contact"];

  return (
    <footer className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900 dark:to-black text-gray-900 dark:text-white py-12 px-4 font-inter border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 max-w-7xl flex flex-col md:flex-row justify-between space-y-5">
        <div className="w-full md:w-6/12 lg:w-4/12 space-y-4">
          <div className="flex items-center space-x-2">
            <h3 className="text-xl md:text-2xl font-extrabold text-blue-600 dark:text-teal-400">
              Nana Handre Saputra
            </h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-justify md:text-start text-sm leading-relaxed">
            Always learning, always creating — turning every challenge into an
            opportunity to grow and build meaningful solutions.
          </p>
        </div>
        <div className="space-y-4">
          {/* <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
            Connect
          </h3> */}
          <div className="space-y-3 text-gray-600 dark:text-gray-400">
            <h3 className="text-xl md:text-2xl font-extrabold text-black/70 dark:text-white/70">
              Navigate
            </h3>
            {navLinks.map((text, index) => (
              <p
                onClick={() => handleScroll(text)}
                key={index}
                className="hover:text-black dark:hover:text-white hover:cursor-pointer"
              >
                {text}
              </p>
            ))}
          </div>
        </div>
      </div>
      <div className="text-center text-gray-500 dark:text-gray-400 text-sm pt-10 mt-10 border-t border-gray-200 dark:border-gray-700">
        <p>
          &copy; {new Date().getFullYear()} Nana Handre Saputra. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};
export default Footer;
