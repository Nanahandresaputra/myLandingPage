import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const PortoCard = ({ data }) => {
  const navigate = useNavigate();
  return (
    <section className="p-5 border border-black/20 dark:border-white/20 rounded-md bg-transparent bg-clip-padding backdrop-blur-md space-y-7">
      <img
        src={data.banner}
        className="w-full object-cover object-center h-40 rounded-md"
      />
      <div>
        <p className="text-black dark:text-white font-semibold text-lg">
          {data.title}
        </p>
        <p className="text-black/70 dark:text-white/70 text-justify line-clamp-3">
          {data.description}
        </p>
      </div>
      <div className="flex justify-end">
        <button
          onClick={() => navigate("/porto-detail", { state: data })}
          className="py-2 px-4 rounded-md flex justify-center items-center space-x-2 border dark:border-none text-black dark:text-white dark:bg-gray-500/40"
        >
          <span>Detail</span>
          <FaArrowRightLong className="text-sm" />
        </button>
      </div>
    </section>
  );
};

export default PortoCard;
