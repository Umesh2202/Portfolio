// import logo from "./logo.svg";
import "./App.css";
// import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./views/main";
import Project from "./views/projects";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Main />}></Route>
        <Route path="/projects" element={<Project />}></Route>
      </Routes>
    </div>
  );
}

export default App;
