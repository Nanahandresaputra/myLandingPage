import React, { useContext, useEffect, useRef } from "react";
import { GlobalContext } from "../../layout";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { FreeMode, Pagination, Navigation } from "swiper/modules";
import { TbWorld } from "react-icons/tb";
import {
  FaChevronLeft,
  FaChevronRight,
  FaGithub,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiAntdesign,
  SiExpress,
  SiJavascript,
  SiNestjs,
  SiNextdotjs,
  SiTypescript,
} from "react-icons/si";
import { FaDartLang, FaFlutter } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { GrReactjs } from "react-icons/gr";
import { BiLogoPostgresql } from "react-icons/bi";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const PortoDetailPage = () => {
  const { theme } = useContext(GlobalContext);
  const techStackData = [
    {
      icon: (
        <SiJavascript className="dark:text-white/70 text-black/70 text-3xl lg:text-4xl" />
      ),
      label: "Javascript",
    },
    {
      icon: (
        <SiTypescript className="dark:text-white/70 text-black/70 text-3xl lg:text-4xl" />
      ),
      label: "Typescript",
    },
    {
      icon: (
        <FaDartLang className="dark:text-white/70 text-black/70 text-3xl lg:text-4xl" />
      ),
      label: "Dart",
    },
    {
      icon: (
        <RiTailwindCssFill className="dark:text-white/70 text-black/70 text-3xl lg:text-4xl" />
      ),
      label: "Tailwindcss",
    },
    {
      icon: (
        <GrReactjs className="dark:text-white/70 text-black/70 text-3xl lg:text-4xl" />
      ),
      label: "React.js",
    },
    {
      icon: (
        <SiNextdotjs className="dark:text-white/70 text-black/70 text-3xl lg:text-4xl" />
      ),
      label: "Next.js",
    },
    {
      icon: (
        <SiAntdesign className="dark:text-white/70 text-black/70 text-3xl lg:text-4xl" />
      ),
      label: "Ant Design",
    },
    {
      icon: (
        <FaNodeJs className="dark:text-white/70 text-black/70 text-3xl lg:text-4xl" />
      ),
      label: "Node.js",
    },
    {
      icon: (
        <SiExpress className="dark:text-white/70 text-black/70 text-3xl lg:text-4xl" />
      ),
      label: "Express.js",
    },
    {
      icon: (
        <SiNestjs className="dark:text-white/70 text-black/70 text-3xl lg:text-4xl" />
      ),
      label: "Nest.js",
    },
    {
      icon: (
        <BiLogoPostgresql className="dark:text-white/70 text-black/70 text-3xl lg:text-4xl" />
      ),
      label: "Postgresql",
    },
    {
      icon: (
        <FaFlutter className="dark:text-white/70 text-black/70 text-3xl lg:text-4xl" />
      ),
      label: "Flutter",
    },
  ];

  const { t } = useTranslation();

  const lang = sessionStorage.getItem("lang") ?? "EN";

  const { state } = useLocation();

  const handleOpenInNewTab = (path) => {
    window.open(path, "_blank");
  };

  const swiperRef = useRef();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="min-h-screen md:py-[10vh] w-full bg-white dark:bg-[#020617] relative flex flex-col justify-center">
      <div
        className="absolute inset-0 z-0"
        style={{
          ...(theme === "dark"
            ? {
                background: `
          radial-gradient(ellipse 120% 80% at 70% 20%, rgba(255, 20, 147, 0.15), transparent 50%),
          radial-gradient(ellipse 100% 60% at 30% 10%, rgba(0, 255, 255, 0.12), transparent 60%),
          radial-gradient(ellipse 90% 70% at 50% 0%, rgba(138, 43, 226, 0.18), transparent 65%),
          radial-gradient(ellipse 110% 50% at 80% 30%, rgba(255, 215, 0, 0.08), transparent 40%),
          #000000
        `,
              }
            : {
                background: "#ffffff",
                backgroundImage: `
        radial-gradient(
          circle at top left,
          rgba(70, 130, 180, 0.5),
          transparent 70%
        )
      `,
                filter: "blur(80px)",
                backgroundRepeat: "no-repeat",
              }),
        }}
      />
      <div className="container py-[4vh] md:py-0 lg:py-[10vh] 2xl:py-0 mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 max-w-7xl relative z-10 space-y-12">
        <div className="space-y-5">
          <p
            className={`text-black dark:text-white font-semibold text-3xl md:text-5xl`}
          >
            {state.title}
          </p>
          <div className="flex space-x-5">
            <button
              onClick={() => handleOpenInNewTab(state.link)}
              type="button"
              className="bg-neutral-600 dark:bg-white p-2 flex items-center justify-center space-x-2 text-white/80 dark:text-black w-32 rounded-md  hover:cursor-pointer dark:hover:bg-white/90 hover:bg-neutral-500/70 transition-all"
            >
              <TbWorld className="text-xl" />
              <span className=" font-semibold">Link</span>
            </button>
            <button
              onClick={() => handleOpenInNewTab(state.github)}
              type="button"
              className="p-2 flex items-center justify-center space-x-2 dark:text-white text-black w-32 rounded-md border border-black/70 dark:border-white  hover:cursor-pointer hover:shadow-md  dark:hover:shadow-white/40 transition-all"
            >
              <FaGithub className="text-xl" />
              <span className=" font-semibold">Github</span>
            </button>
          </div>
        </div>

        <div className="relative">
          <div className="absolute h-full left-0 flex items-center z-50">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="rounded-full p-2 md:p-4 bg-white border-2 border-gray-400"
            >
              <FaChevronLeft className="text-black md:text-xl" />
            </button>
          </div>

          <div className="absolute h-full right-0 flex items-center z-50">
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="rounded-full p-2 md:p-4 bg-white border-2 border-gray-400 "
            >
              <FaChevronRight className="text-black md:text-xl" />
            </button>
          </div>

          <div className="w-full flex justify-center">
            <div className="w-[94%] md:w-[96%]">
              <Swiper
                breakpoints={{
                  320: {
                    slidesPerView: state.isMobile ? 2 : 1,
                  },
                  768: {
                    slidesPerView: state.isMobile ? 3 : 1,
                  },
                  1000: {
                    slidesPerView: state.isMobile ? 4 : 1,
                  },
                }}
                spaceBetween={20}
                centeredSlides={true}
                //   loop={true}
                pagination={{
                  clickable: true,
                  type: "progressbar",
                }}
                modules={[Pagination, Navigation]}
                className="mySwiper"
                onBeforeInit={(swiper) => {
                  swiperRef.current = swiper;
                }}
                grabCursor={true}
              >
                {state.images.map((data, index) => (
                  <SwiperSlide className="w-full" key={index}>
                    <img
                      src={data}
                      className="h-full md:min-h-[40vh]"
                      key={index}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-black/70 dark:text-white/70 text-2xl md:text-3xl font-semibold">
            {t("techStack.title")}
          </p>
          <div className="flex items-center space-x-5">
            {techStackData
              .filter((data) => state.stack.includes(data.label))
              .map((data, index) => (
                <div
                  className="flex flex-col items-center space-y-3"
                  key={index}
                >
                  {data.icon}
                  <p className="text-xs md:text-base text-black/70 dark:text-white/70 text-center">
                    {data.label}
                  </p>
                </div>
              ))}
          </div>
        </div>

        <div className="space-y-3">
          <p className="text-black/70 dark:text-white/70 text-2xl md:text-3xl font-semibold">
            {t("otherKey.description")}
          </p>
          <p className="text-black/70 dark:text-white/70  text-sm md:text-base ">
            {lang === "ID" ? state.descriptionId : state.descriptionEn}
          </p>
        </div>
      </div>
    </section>
  );
};

export default PortoDetailPage;

// import React from "react";
// import { useSwiper } from "swiper/react";

// export const SwiperNavButtons = () => {
//   const swiper = useSwiper();

//   return (
// <div className="swiper-nav-btns">
//   <button onClick={() => swiper.slidePrev()}>Prev</button>
//   <button onClick={() => swiper.slideNext()}>Next</button>
// </div>
//   );
// };
