import React, { useContext } from "react";
import { GlobalContext } from "../../../layout";
import { TypewriterText } from "../../utils/typewriter";
import AuroraView from "../../utils/aurora-text";
import { nnprofile } from "../../../assets";
import { IoMdDownload } from "react-icons/io";
import { useTranslation } from "react-i18next";

const HomeBanner = () => {
  const { theme } = useContext(GlobalContext);
  const { t } = useTranslation();
  return (
    <div
      className="min-h-[92vh] overflow-hidden w-full relative flex flex-col justify-center bg-white dark:bg-transparent"
      id="Home"
    >
      <div
        className="absolute inset-0 z-0"
        style={{
          ...(theme === "dark"
            ? {
                background: `
          radial-gradient(ellipse 70% 55% at 50% 50%, rgba(255, 20, 147, 0.15), transparent 50%),
            radial-gradient(ellipse 160% 130% at 10% 10%, rgba(0, 255, 255, 0.12), transparent 60%),
            radial-gradient(ellipse 160% 130% at 90% 90%, rgba(138, 43, 226, 0.18), transparent 65%),
            radial-gradient(ellipse 110% 50% at 80% 30%, rgba(255, 215, 0, 0.08), transparent 40%),
            #000000
          `,
              }
            : {
                background: "#ffffff",
                backgroundImage: `
        radial-gradient(
          circle at top left,
          rgba(56, 193, 182, 0.5),
          transparent 70%
        )
      `,
                filter: "blur(80px)",
                backgroundRepeat: "no-repeat",
              }),
        }}
      />
      <div className="container mx-auto py-[10vh] md:py-0 px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 max-w-7xl relative z-10 grid grid-cols-1 md:grid-cols-2 items-center gap-y-8 md:gap-y-0">
        <div className="col-span-1 order-last md:order-first flex flex-col justify-center space-y-3 md:space-y-8">
          <div>
            <p className=" text-black dark:text-white text-xs lg:text-xl">
              {t("banner.hiText")}
            </p>
            <TypewriterText
              text="Nana Handre Saputra"
              className="text-2xl lg:text-5xl"
            />
          </div>
          <AuroraView
            className="text-4xl font-bold lg:text-5xl"
            text="Software Developer"
          />
          <p className=" text-black/60 dark:text-white/60 text-justify text-sm md:text-xl">
            {t("banner.description")}
          </p>
          {/* <button
            type="button"
            className="bg-white p-2 flex items-center space-x-2 text-black w-40 rounded-md justify-center  hover:cursor-pointer hover:bg-white/90 transition-all"
          >
            <IoMdDownload className="text-xl" />
            <span>Download CV</span>
          </button> */}
        </div>
        <div className="col-span-1 order-first md:order-last flex justify-center md:justify-end items-center">
          <img
            src={nnprofile}
            alt="profile"
            className="w-56 h-56 md:w-64 md:h-64 lg:w-10/12 lg:h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
