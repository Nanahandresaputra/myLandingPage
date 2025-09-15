import React from "react";
import HomeBanner from "../../components/home/banner";
import AboutMe from "../../components/home/about-me";
import Portofolio from "../../components/home/portofolio";

const HomePage = () => {
  return (
    <section>
      <HomeBanner />
      <AboutMe />
      <Portofolio />
    </section>
  );
};

export default HomePage;
