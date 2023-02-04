import "./sidebar.css";
import { Home, Analytics, AutoGraph,AttachMoney } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useState } from "react";
export default function Sidebar() {
    let [active,setActive] = useState(0);

    let styles = {
        backgroundColor: "rgb(240, 240, 255)",
        color: "#000"
    }
    function handlerClick(id) {
        setActive(active = id);
    }
    
  return (
    <div className="sidebar">
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Dashboard</h3>
                <ul className="sidebarList">
                   <Link to="/">
                        <li className="sidebarListItem" onClick={() => handlerClick(0)} style={(active === 0) ? styles : {} }>
                            <Home className="sidebar-icons"/>
                            Home
                        </li>
                    </Link>

                    <Link to="/about">
                        <li className="sidebarListItem" onClick={() => handlerClick(1)}  style={(active === 1) ? styles : {} }>
                            <Analytics className="sidebar-icons" />
                            About Me
                        </li>
                    </Link>

                    <Link to="projects">
                        <li className="sidebarListItem" onClick={() => handlerClick(2)}  style={(active === 2) ? styles : {} }>
                            <AttachMoney className="sidebar-icons" />
                            Projects
                        </li>
                    </Link>
                    <Link to="readmore">
                        <li className="sidebarListItem" onClick={() => handlerClick(3)}  style={(active === 3) ? styles : {} } >
                            <AutoGraph className="sidebar-icons" />
                            Read more
                        </li>
                    </Link>

                    <Link to="nested-route">
                        <li className="sidebarListItem" onClick={() => handlerClick(4)}  style={(active === 4) ? styles : {} } >
                            <AutoGraph className="sidebar-icons"/>
                            Nested Route
                        </li>
                    </Link>
                </ul>
            </div>
        </div>
    </div>
  )
}
 