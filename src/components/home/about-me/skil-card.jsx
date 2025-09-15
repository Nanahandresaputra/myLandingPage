import { BiLogoPostgresql } from "react-icons/bi";
import { FaCss3 } from "react-icons/fa";
import { FaDartLang, FaFlutter, FaNodeJs } from "react-icons/fa6";
import { GrReactjs } from "react-icons/gr";
import { IoLogoHtml5 } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import {
  SiAntdesign,
  SiExpress,
  SiJavascript,
  SiNestjs,
  SiNextdotjs,
  SiTypescript,
} from "react-icons/si";

const SkillsCard = () => {
  const logos = [
    {
      icon: (
        <SiJavascript className="dark:text-white/70 text-black/70 text-2xl lg:text-5xl" />
      ),
      label: "Javascript",
    },
    {
      icon: (
        <SiTypescript className="dark:text-white/70 text-black/70 text-2xl lg:text-5xl" />
      ),
      label: "Typescript",
    },
    {
      icon: (
        <FaDartLang className="dark:text-white/70 text-black/70 text-2xl lg:text-5xl" />
      ),
      label: "Dart",
    },
    {
      icon: (
        <RiTailwindCssFill className="dark:text-white/70 text-black/70 text-2xl lg:text-5xl" />
      ),
      label: "Tailwindcss",
    },
    {
      icon: (
        <GrReactjs className="dark:text-white/70 text-black/70 text-2xl lg:text-5xl" />
      ),
      label: "React",
    },
    {
      icon: (
        <SiNextdotjs className="dark:text-white/70 text-black/70 text-2xl lg:text-5xl" />
      ),
      label: "Next.js",
    },
    {
      icon: (
        <SiAntdesign className="dark:text-white/70 text-black/70 text-2xl lg:text-5xl" />
      ),
      label: "Ant Design",
    },
    {
      icon: (
        <FaNodeJs className="dark:text-white/70 text-black/70 text-2xl lg:text-5xl" />
      ),
      label: "Node.js",
    },
    {
      icon: (
        <SiExpress className="dark:text-white/70 text-black/70 text-2xl lg:text-5xl" />
      ),
      label: "Express.js",
    },
    {
      icon: (
        <SiNestjs className="dark:text-white/70 text-black/70 text-2xl lg:text-5xl" />
      ),
      label: "Nest.js",
    },
    {
      icon: (
        <BiLogoPostgresql className="dark:text-white/70 text-black/70 text-2xl lg:text-5xl" />
      ),
      label: "Postgresql",
    },
    {
      icon: (
        <FaFlutter className="dark:text-white/70 text-black/70 text-2xl lg:text-5xl" />
      ),
      label: "Flutter",
    },
  ];

  return (
    <section className="grid grid-cols-3 md:grid-cols-6 gap-5">
      {logos.map((data, index) => (
        <div
          className="py-7 rounded-md  dark:bg-white/20 bg-black/10 flex flex-col items-center space-y-4"
          key={index}
        >
          {data.icon}
          <p className="dark:text-white/70 text-black/70">{data.label}</p>
        </div>
      ))}
    </section>
  );
};

export default SkillsCard;
