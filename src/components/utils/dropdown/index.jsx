import React, { useState, useEffect, useRef } from "react";
import { enImg, idImg } from "../../../assets";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const DropdownMenu = ({ children, trigger }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const handleTriggerClick = (e) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };
  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <div onClick={handleTriggerClick} className="cursor-pointer">
        {trigger}
      </div>
      {isOpen && (
        <div
          className="absolute left-0 lg:right-0 mt-2 w-32 rounded-lg shadow-lg bg-white dark:bg-zinc-900 ring-1 ring-black ring-opacity-5 focus:outline-none z-50 animate-in fade-in-0 zoom-in-95 p-1"
          role="menu"
          aria-orientation="vertical"
        >
          {children}
        </div>
      )}
    </div>
  );
};
const DropdownMenuItem = ({ children, onClick }) => (
  <a
    href="#"
    onClick={(e) => {
      e.preventDefault();
      if (onClick) onClick();
    }}
    className="text-zinc-700 dark:text-zinc-300 group flex space-x-2 px-3 py-2 text-sm rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors duration-150"
    role="menuitem"
  >
    {children}
  </a>
);

const flag = [
  {
    title: "EN",
    img: enImg,
  },
  {
    title: "ID",
    img: idImg,
  },
];

export default function FlagLangDropDown() {
  const { i18n } = useTranslation();

  const lang = sessionStorage.getItem("lang") ?? "EN";

  const handleLangChange = (txtLang) => {
    i18n.changeLanguage(`${txtLang}`);
    sessionStorage.setItem("lang", txtLang);
  };

  return (
    <section className="flex items-center w-32">
      <DropdownMenu
        trigger={
          <button className="inline-flex items-center justify-center md:w-32 space-x-1 text-sm lg:text-base font-medium text-zinc-700 dark:text-zinc-300 transition-all">
            <img
              src={flag.find((dt) => dt.title === lang).img}
              alt={`imglang`}
              className="w-7 h-5 border rounded-sm"
            />
            <span>{flag.find((dt) => dt.title === lang).title}</span>
          </button>
        }
      >
        {flag.map((data, index) => (
          <DropdownMenuItem
            onClick={() => handleLangChange(data.title)}
            key={index}
          >
            <img
              src={data.img}
              alt={`imglang${index}`}
              className="w-7 h-5 border rounded-sm"
            />
            <span>{data.title}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenu>
    </section>
  );
}
