import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Test2() {
  let styles = {
    width: "100%",
    height: "70vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
  return (
    <div style={styles}>
        <h1>This is the Test Second page.</h1>
    </div>
  )
}
