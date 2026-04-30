import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./app.css";
import Layout from "./layout";
import HomePage from "./page/home";
import PortoDetailPage from "./page/porto-detail";
import SplashCursor from "./components/utils/splash-cursor";

function App() {
  return (
    <section>
      {/* <SplashCursor /> */}
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="" element={<HomePage />} />
            <Route path="porto-detail" element={<PortoDetailPage />} />
          </Route>
        </Routes>
      </Router>
    </section>
  );
}

export default App;
