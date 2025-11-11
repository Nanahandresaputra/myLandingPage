import React, { useContext } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import FormContact from "./form";
import { GlobalContext } from "../../../layout";
import { darkBg, lightBg } from "../../../assets";
import { Link } from "react-router-dom";

const ContactMe = () => {
  const { theme } = useContext(GlobalContext);
  return (
    <section
      id="Contact"
      className="w-full min-h-screen  flex justify-center items-center"
      style={{
        backgroundImage: `url('${theme === "dark" ? darkBg : lightBg}')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div class="grid lg:grid-cols-2 items-start gap-12 container py-[10vh] md:py-0 lg:py-[10vh] 2xl:py-0 mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 max-w-7xl relative z-10 space-y-6 md:space-y-12 ">
        <div>
          <h2 class="text-black dark:text-white text-3xl lg:text-5xl font-bold">
            Let's Talk
          </h2>
          <p class="text-[15px] text-black/70 dark:text-white/70 mt-4 leading-relaxed">
            Have some big idea or brand to develop and need help? Then reach out
            we'd love to hear about your project and provide help.
          </p>
          <div class="mt-12">
            <h2 class="text-black/70 dark:text-white/70 text-base font-semibold">
              Email
            </h2>
            <ul class="mt-4">
              <li class="flex items-center">
                <MdEmail className="text-black/70 dark:text-white/70 text-4xl" />
                <a href="javascript:void(0)" class="text-sm ml-4">
                  <small class="block text-black/70 dark:text-white/70">
                    Mail
                  </small>
                  <span class="text-black dark:text-white font-medium">
                    nana20.jobs@gmail.com
                  </span>
                </a>
              </li>
            </ul>
          </div>

          <div class="mt-12">
            <h2 class="text-black/70 dark:text-white/70 text-base font-semibold">
              Socials
            </h2>
            <ul class="flex mt-4 space-x-4">
              <li class="border border-gray-800 dark:border-gray-400 p-2 rounded-full flex items-center justify-center shrink-0">
                <Link>
                  <FaLinkedin className="text-black/70 dark:text-white/70 text-3xl" />
                </Link>
              </li>
              <li class="border border-gray-800 dark:border-gray-400 p-2 rounded-full flex items-center justify-center shrink-0">
                <Link>
                  <FaGithub className="text-black/70 dark:text-white/70 text-3xl" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="backdrop-blur-md bg-gray-950/10 dark:bg-white/10 border border-gray-950/20 dark:border-white/20 rounded-lg shadow-md p-7">
          <FormContact />
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
