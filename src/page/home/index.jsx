import React from "react";
import HomeBanner from "../../components/home/banner";
import AboutMe from "../../components/home/about-me";
import Portofolio from "../../components/home/portofolio";
import ContactMe from "../../components/home/contact";

const HomePage = () => {
  return (
    <section>
      <HomeBanner />
      <AboutMe />
      <Portofolio />
      <ContactMe />
    </section>
  );
};

export default HomePage;
