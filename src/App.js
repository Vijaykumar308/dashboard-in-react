import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/topbar";
import "./app.css";
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Topbar />  
      <div className="container">
        <Sidebar />
        <Routes>
          <Route path="/" element= {<Home />} />
          <Route path="/users" element= {<UserList />} />
          <Route path="/" element= {<Home />} />

        </Routes>
      </div>

    </BrowserRouter>
  );
}

export default App;
