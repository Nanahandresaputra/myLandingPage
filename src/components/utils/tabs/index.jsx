import React, { useState } from "react";

const Tabs = ({ onChange = () => {} }) => {
  const [selected, setSelected] = useState("All");
  const tabsSection = ["All", "Frontend", "Mobile", "Backend"];
  const funcSelected = (text) => {
    onChange(text);
    setSelected(text);
  };
  return (
    <section className="grid grid-cols-4">
      {tabsSection.map((data, index) => (
        <div
          key={index}
          className={`col-span-1 text-center py-2 border-b-2  font-semibold text-sm md:text-base lg:text-xl hover:cursor-pointer transition-all transition-discrete duration-200 ${
            data === selected ? "dark:border-indigo-700 dark:text-indigo-700 border-violet-500 text-violet-500" : "dark:text-white/70 text-black/60"
          }`}
          onClick={() => funcSelected(data)}
        >
          {data}
        </div>
      ))}
    </section>
  );
};

export default Tabs;
