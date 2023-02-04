import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function nesting() {
    let styles = {
        flex: 4,
    }
    let navLinks = {
        display:"flex"
    }
  return (
    <div style={styles}>
        <h1>This is the Main basic of nested routing page</h1>
        <div style={navLinks}>
            <Link to="test1">Test1</Link>
            <Link to="test2">Test2</Link>
            <Outlet />
        </div>
    </div>
  )
}
