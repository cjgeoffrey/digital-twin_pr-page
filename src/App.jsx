import "./App.css";

import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./routes/Home";
import Approach from "./routes/Approach";
import Consortium from "./routes/Consortium";
import ContactPage from "./routes/ContactPage";
import Publications from "./routes/Publications";
import News from "./routes/News";
import NavBarComponent from "./components/NavBarComponent";
function App() {
  return (
    <>
      <Router>
        <NavBarComponent />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/approach" element={<Approach />} />
          <Route path="/consortium" element={<Consortium />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/news" element={<News />} />
          <Route path="/publications" element={<Publications />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
