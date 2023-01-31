import "./sidebar.css";
import { Home, Analytics, AutoGraph,AttachMoney } from "@mui/icons-material";
import { Link } from "react-router-dom";
export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Dashboard</h3>
                <ul className="sidebarList">
                   <Link to="/">
                        <li className="sidebarListItem active">
                            <Home className="sidebar-icons" />
                            Home
                        </li>
                    </Link>

                    <Link to="/about">
                        <li className="sidebarListItem">
                            <Analytics className="sidebar-icons" />
                            About Me
                        </li>
                    </Link>

                    <Link to="projects">
                        <li className="sidebarListItem">
                            <AttachMoney className="sidebar-icons" />
                            Projects
                        </li>
                    </Link>
                    <Link to="">
                        <li className="sidebarListItem">
                            <AutoGraph className="sidebar-icons" />
                            Statistics
                        </li>
                    </Link>
                </ul>
            </div>
        </div>
    </div>
  )
}
 