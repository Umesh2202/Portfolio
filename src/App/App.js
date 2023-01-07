import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "../pages/Home/Home";
import Projects from "../pages/Projects/Projects";
import Skills from "../pages/Skills/Skills";
import About from "../pages/About/About";
import Education from "../pages/Education/Education";
import style from "./App.module.css";

function App() {
  return (
    <div className={style.App}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/skills" element={<Skills />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/education" element={<Education />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
