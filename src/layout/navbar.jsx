import { useState, useEffect, useContext } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoMoonOutline } from "react-icons/io5";
import { LuSunMedium } from "react-icons/lu";
import { MdClose } from "react-icons/md";
import { GlobalContext } from ".";
import { useLocation, useNavigate } from "react-router-dom";
import FlagLangDropDown from "../components/utils/dropdown";
import { useTranslation } from "react-i18next";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  // const [current, setCurrent] = useState("home");

  const { theme, setTheme } = useContext(GlobalContext);
  const { t } = useTranslation();

  const location = useLocation();

  const navigate = useNavigate();

  const handleScroll = (e) => {
    navigate("/");
    if (location.pathname === "/") {
      // setCurrent(e.key);
      const element = document.getElementById(e);
      const headerOffset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    } else {
      setTimeout(() => {
        // setCurrent(e.key);
        const element = document.getElementById(e);
        const headerOffset = 90;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }, 500);
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navLinks = [
    {
      title: t("navLink.home"),
      key: "Home",
    },
    {
      title: t("navLink.aboutMe"),
      key: "About Me",
    },
    {
      title: t("navLink.portofolios"),
      key: "Portofolios",
    },
    {
      title: t("navLink.contact"),
      key: "Contact",
    },
  ];

  return (
    <header
      className={`w-full transition-all duration-300 ${
        isScrolled ? "bg-white/70 dark:bg-gray-900/70 backdrop-blur-lg shadow-lg" : "bg-white dark:bg-gray-900 backdrop-blur-md"
      } border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50 w-full`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 max-w-7xl">
        <div className="flex h-14 sm:h-16 lg:h-20 items-center justify-between">
          {/* Logo and Name */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2 group" onClick={() => handleScroll("Home")}>
              <div className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 bg-gray-900 dark:bg-gray-50 rounded-full flex items-center justify-center transition-transform group-hover:scale-110">
                <span className="text-white dark:text-gray-900 font-bold text-base sm:text-lg lg:text-xl">N</span>
              </div>
              {/* <span className="font-bold text-lg sm:text-xl lg:text-2xl text-gray-900 dark:text-gray-100">
                Nn Dev
              </span> */}
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-6 xl:space-x-8">
            {navLinks.map((text) => (
              <a
                key={text.key}
                onClick={() => handleScroll(text.key)}
                className="text-sm hover:cursor-pointer lg:text-base font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors relative group"
              >
                {text.title}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-900 dark:bg-gray-100 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
            <button className="text-white dark:text-black text-xl" type="button" onClick={toggleTheme}>
              {theme === "dark" ? <IoMoonOutline className="text-white" /> : <LuSunMedium className="text-black" />}
            </button>
            <FlagLangDropDown />
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors" aria-label="Toggle menu">
            {isMenuOpen ? <MdClose className="h-5 w-5 sm:h-6 sm:w-6" /> : <HiMenuAlt3 className="h-5 w-5 sm:h-6 sm:w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
          {isMenuOpen && (
            <div className="py-4 border-t border-gray-200 dark:border-gray-800">
              <div className="flex flex-col space-y-1">
                {navLinks.map((text) => (
                  <a
                    key={text.key}
                    onClick={() => {
                      handleScroll(text.key);
                      setIsMenuOpen(false);
                    }}
                    className="px-3 py-2.5 hover:cursor-pointer text-sm sm:text-base font-medium text-gray-600 dark:text-gray-300 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  >
                    {text.title}
                  </a>
                ))}
                <div className="pt-4 mt-2 border-t border-gray-200 dark:border-gray-700 flex flex-col items-start space-y-5">
                  <button className="text-xl" type="button" onClick={toggleTheme}>
                    {theme === "dark" ? <IoMoonOutline className="text-white" /> : <LuSunMedium className="text-black" />}
                  </button>
                  <FlagLangDropDown />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
export default Navbar;
