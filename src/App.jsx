import "./App.css";
import NavBar from "./components/NavBar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  ScrollRestoration,
} from "react-router-dom";

import Home from "./routes/Home";
import Concept from "./routes/Concept";
import Consortium from "./routes/Consortium";
import ContactPage from "./routes/ContactPage";
import Publications from "./routes/Publications";
import News from "./routes/News";
function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Home />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/concept" element={<Concept />} />
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
