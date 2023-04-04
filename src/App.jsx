import Navbar from "./components/navbar";
import "./app.css";
import Contact from "./components/contact";
import Banner from "./components/banner";
import Skills from "./components/skills";
import Portofolios from "./components/portofolios";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Skills />
      <Portofolios />
      <Contact name="Contact" />
    </div>
  );
}

export default App;
