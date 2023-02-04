import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/topbar";
import "./app.css";
import Home from "./pages/home/Home";
import Projects from "./pages/projects/Projects";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutMe from "./pages/aboutMe/AboutMe";
import ReadMore from "./pages/readMore/ReadMore";
import Nesting from "./components/Nesting/nesting";
import Test1 from "./components/Nesting/Test1";
import Test2 from "./components/Nesting/Test2";

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

          <Route path="/nested-route" element= {<Nesting />}>
            <Route index element= {<Test1 />} />
            <Route path="test1" element= {<Test1 />} />
            <Route path="test2" element= {<Test2 />} />
          </Route>

          <Route path="*" element= {<h1 style={{flex:"4"}}>Page not found</h1>} />
        </Routes>
      </div>

    </BrowserRouter>
  );
}

export default App;
