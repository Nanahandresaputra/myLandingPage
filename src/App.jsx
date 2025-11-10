import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./app.css";
import Layout from "./layout";
import HomePage from "./page/home";
import PortoDetailPage from "./page/porto-detail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<HomePage />} />
          <Route path="porto-detail" element={<PortoDetailPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
