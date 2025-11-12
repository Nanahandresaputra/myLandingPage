import React, { useContext } from "react";
import { GlobalContext } from "../../../layout";
import PortoCard from "./porto-card";
import { portoListData } from "../../../data/porto-list";
import { useTranslation } from "react-i18next";

const Portofolio = () => {
  const { theme } = useContext(GlobalContext);
  const { t } = useTranslation();

  return (
    <section
      className="min-h-screen lg:py-[5vh] w-full bg-white dark:bg-[#020617] relative flex flex-col justify-center"
      id="Portofolios"
    >
      <div
        className="absolute inset-0 z-0"
        style={{
          ...(theme === "dark"
            ? {
                background: "#020617",
                backgroundImage: `
        linear-gradient(to right, rgba(71,85,105,0.15) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(71,85,105,0.15) 1px, transparent 1px),
        radial-gradient(circle at 50% 60%, rgba(236,72,153,0.15) 0%, rgba(168,85,247,0.05) 40%, transparent 70%)
      `,
                backgroundSize: "40px 40px, 40px 40px, 100% 100%",
              }
            : {
                backgroundImage: `
        linear-gradient(to right, rgba(229,231,235,0.8) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(229,231,235,0.8) 1px, transparent 1px),
        radial-gradient(circle 500px at 20% 80%, rgba(139,92,246,0.3), transparent),
        radial-gradient(circle 500px at 80% 20%, rgba(59,130,246,0.3), transparent)
      `,
                backgroundSize: "48px 48px, 48px 48px, 100% 100%, 100% 100%",
              }),
        }}
      />
      <div className="container py-[10vh] 2xl:py-0 mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 max-w-7xl relative z-10 space-y-12">
        <p className="text-black dark:text-white font-bold text-3xl lg:text-5xl">
          {t("portofolios.title")}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {portoListData.map((data, index) => (
            <PortoCard key={index} data={data} />
          ))}
          {/* {[...new Array(6)].map((_, idx) => (
            <PortoCard key={idx} />
          ))} */}
        </div>
      </div>
    </section>
  );
};

export default Portofolio;
