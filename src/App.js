import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/topbar";
import "./app.css";
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
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
          <Route path="/users" element= {<UserList />} />

        </Routes>
      </div>

    </BrowserRouter>
  );
}

export default App;
