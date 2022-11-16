import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./views/main";
import Project from "./views/projects";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/projects" element={<Project />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
