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
                   <Link to="/" >
                    <li className="sidebarListItem active">
                        <Home className="sidebar-icons" />
                        Home
                    </li>
                    </Link>
                    <Link to="/users">
                    <li className="sidebarListItem">
                        <Analytics className="sidebar-icons" />
                        Analytics
                    </li>
                    </Link>
                    <li className="sidebarListItem">
                        <AttachMoney className="sidebar-icons" />
                        Sales
                    </li>

                    <li className="sidebarListItem">
                        <AutoGraph className="sidebar-icons" />
                        Statistics
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}
 