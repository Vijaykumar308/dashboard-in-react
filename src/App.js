import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/topbar";
import "./app.css";
import Home from "./pages/home/Home";
import Projects from "./pages/projects/Projects";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutMe from "./pages/aboutMe/AboutMe";
import ReadMore from "./pages/readMore/ReadMore";
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
          <Route path="/readmore" element= {<ReadMore />} />
        </Routes>
      </div>

    </BrowserRouter>
  );
}

export default App;
