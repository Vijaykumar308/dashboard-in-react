import "./nesting.css";
import { NavLink, Outlet } from 'react-router-dom'

export default function nesting() {
  return (
    <div className='nesting'>
        <h1 className="heading">Nesting Routes Example</h1>
        <div className="nav-link">
            <NavLink to="test1">Test1</NavLink>
            <NavLink to="test2">Test2</NavLink>
        </div>
        <Outlet />
    </div>
  )
}
