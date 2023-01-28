import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Dashboard</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <span className="sidebar-icons">icon</span>
                        Home
                    </li>

                    <li className="sidebarListItem">
                        <span className="sidebar-icons">icon</span>
                        Analytics
                    </li>

                    <li className="sidebarListItem">
                        <span className="sidebar-icons">icon</span>
                        Sales
                    </li>

                    <li className="sidebarListItem">
                        <span className="sidebar-icons">icon</span>
                        About us
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}
 