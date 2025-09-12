import React, { useContext } from "react";
import { GlobalContext } from "../../../layout";
import TypewriterView from "./typewriter";

const HomeBanner = () => {
  const { theme } = useContext(GlobalContext);
  return (
    <div className="min-h-screen w-full relative pt-14 bg-white dark:bg-transparent">
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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 max-w-7xl relative z-10 grid grid-cols-2">
        <div className="col-span-1">
          <p className="font-mono">Hi my name is</p>
          <TypewriterView />
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
