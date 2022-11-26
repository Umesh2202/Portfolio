import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./views/main";
import Projects from "./views/projects";
import Skills from "./views/skills";
import About from "./views/about";
import Education from "./views/education";
import Accounts from "./views/accounts";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/skills" element={<Skills />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/education" element={<Education />} />
          <Route exact path="/accounts" element={<Accounts />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
