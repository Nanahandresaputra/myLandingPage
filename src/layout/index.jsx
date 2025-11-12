import React, { createContext, useEffect, useState } from "react";
import Navbar from "./navbar";
import { Outlet } from "react-router-dom";
import Footer from "./footer";
import i18next from "../lang/i18next";

export const GlobalContext = createContext({});

const Layout = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (localStorage.getItem("theme")) {
      setTheme(localStorage.getItem("theme"));
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? setTheme("dark")
      : setTheme("light");
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <GlobalContext.Provider value={{ theme, setTheme }}>
      <section>
        <Navbar />
        <Outlet />
        <Footer />
      </section>
    </GlobalContext.Provider>
  );
};

export default Layout;
