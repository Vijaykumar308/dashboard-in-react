import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/topbar";
import "./app.css";
import Home from "./pages/home/Home";
import Projects from "./pages/projects/Projects";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutMe from "./pages/aboutMe/AboutMe";
function App() {
  return (
    <BrowserRouter>
      <Topbar />  
      <div className="container">
        <Sidebar />
        <Routes>
          <Route path="/" element= {<Home />} />
          <Route path="/about" element= {<AboutMe />} />
          <Route path="/projects" element= {<Projects />} />
        </Routes>
      </div>

    </BrowserRouter>
  );
}

export default App;
