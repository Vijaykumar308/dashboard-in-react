import "./sidebar.css";
import { Home, Analytics, AutoGraph,AttachMoney } from "@mui/icons-material";
import { NavLink } from "react-router-dom";
export default function Sidebar() {

  return (
    <div className="sidebar">
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Dashboard</h3>
                <ul className="sidebarList">
                   <NavLink to="/">
                        <li className="sidebarListItem">
                            <Home className="sidebar-icons"/>
                            Home
                        </li>
                    </NavLink>

                    <NavLink to="/about">
                        <li className="sidebarListItem">
                            <Analytics className="sidebar-icons" />
                            About Me
                        </li>
                    </NavLink>

                    <NavLink to="projects">
                        <li className="sidebarListItem">
                            <AttachMoney className="sidebar-icons" />
                            Projects
                        </li>
                    </NavLink>
                    {/* <NavLink to="readmore">
                        <li className="sidebarListItem">
                            <AutoGraph className="sidebar-icons" />
                            Read more
                        </li>
                    </NavLink> */}

                    <NavLink to="nested-route">
                        <li className="sidebarListItem">
                            <AutoGraph className="sidebar-icons"/>
                            Nested Route
                        </li>
                    </NavLink>
                </ul>
            </div>
        </div>
    </div>
  )
}
 