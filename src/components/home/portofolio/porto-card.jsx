import React from "react";
import { imgDark } from "../../../assets";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

const PortoCard = () => {
  return (
    <section className="p-5 border border-black/20 dark:border-white/20 rounded-md bg-transparent bg-clip-padding backdrop-blur-md space-y-7">
      <img src={imgDark} className="w-full object-cover h-40 rounded-md" />
      <p className="text-black dark:text-white text-justify">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry
      </p>
      <div className="flex justify-between">
        <button className="text-blue-500 flex items-center space-x-2">
          <span>Demo</span> <FaExternalLinkAlt className="text-sm" />
        </button>
        <button className="py-2 px-4 rounded-md flex justify-center items-center space-x-2 border dark:border-none text-black dark:text-white dark:bg-gray-500/40">
          <span>Detail</span>
          <FaArrowRightLong className="text-sm" />
        </button>
      </div>
    </section>
  );
};

export default PortoCard;
