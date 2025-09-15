import React, { useContext } from "react";
import { GlobalContext } from "../../../layout";

import SkillsCard from "./skil-card";

const AboutMe = () => {
  const { theme } = useContext(GlobalContext);

  return (
    <section className="min-h-[92vh] w-full relative bg-[#f8fafc] dark:bg-transparent flex flex-col items-center justify-center">
      <div
        className="absolute inset-0 z-0"
        style={{
          ...(theme === "dark"
            ? {
                backgroundColor: "#0a0a0a",
                backgroundImage: `
       radial-gradient(circle at 25% 25%, #222222 0.5px, transparent 1px),
       radial-gradient(circle at 75% 75%, #111111 0.5px, transparent 1px)
     `,
                backgroundSize: "10px 10px",
                imageRendering: "pixelated",
              }
            : {
                background: "#ffffff",
                backgroundImage: `
        radial-gradient(
          circle at top right,
          rgba(56, 193, 182, 0.5),
          transparent 70%
        )
      `,
                filter: "blur(80px)",
                backgroundRepeat: "no-repeat",
              }),
        }}
      />
      <div className="container py-[10vh] md:py-0 lg:py-[10vh] 2xl:py-0 mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 max-w-7xl relative z-10 space-y-6 md:space-y-12 ">
        <div className="space-y-6 md:space-y-12 h-full">
          <p className="text-black dark:text-white font-bold text-3xl lg:text-5xl">
            About Me
          </p>
          <div className="flex space-x-8">
            <div className="w-20 bg-blue-500 hidden md:block" />
            <p className="text-black/70 dark:text-white/60 text-justify  lg:text-lg font-semibold">
              I am a graduate of Diploma in Informatics Engineering with a
              strong interest in technology and software development. With 2
              years of experience as a Frontend Developer, I specialize in
              creating interactive, modern, and user-friendly interfaces. Beyond
              frontend development, I am also passionate about exploring Web and
              Mobile development, as I believe technology provides endless
              opportunities to innovate and create meaningful solutions. Driven
              by curiosity, analytical thinking, and a continuous learning
              mindset, I am committed to taking on new challenges and delivering
              impactful digital solutions.
            </p>
          </div>
        </div>
        <div className="space-y-6 md:space-y-12">
          <p className="text-black dark:text-white font-bold text-3xl lg:text-5xl">
            Tech Stack
          </p>
          <SkillsCard />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
