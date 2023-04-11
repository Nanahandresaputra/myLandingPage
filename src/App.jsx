import Navbar from "./components/navbar";
import "./app.css";
import Contact from "./components/contact";
import Banner from "./components/banner";
import Skills from "./components/skills";
import Portofolios from "./components/portofolios";
import AboutME from "./components/aboutme";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <AboutME />
      <Skills />
      <Portofolios />
      <Contact name="Contact" />
    </div>
  );
}

export default App;
