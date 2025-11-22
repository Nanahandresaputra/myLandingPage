import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TabsComp = ({ tabs, className, onChange = () => {} }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  return (
    <div className={`w-full  ${className || ""}`}>
      {}
      <div className="flex  mb-8">
        <div className="flex rounded-2xl bg-slate-100/50 p-1 backdrop-blur-sm dark:bg-slate-800/50">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  onChange(tab.id);
                }}
                className={`relative flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs md:text-sm lg:text-base font-medium transition-all duration-300 hover:cursor-pointer ${
                  isActive ? "text-white shadow-lg" : "text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="gradientTab"
                    className={`absolute inset-0 rounded-xl ${tab.gradient}`}
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 30,
                    }}
                  />
                )}

                <div className="relative z-10 flex items-center gap-2">
                  <span>{tab.title}</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TabsComp;
