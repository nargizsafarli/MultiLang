import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from "./assets/logo.png"
import logo2 from "./assets/call.png"
import "./Navbar.css"

function Navbar() {
  return (
    <div className='nav-container'>
    <img src={logo}/>
    <div className='nav-link'>
       <NavLink to="/" className={({ isActive }) => isActive ? "active-link" : ""}>Home</NavLink>
        <NavLink to="/menu" className={({ isActive }) => isActive ? "active-link" : ""}>Menu</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? "active-link" : ""}>About</NavLink>
        </div>
        <div className='nav-contact'>
            <img src={logo2}/>
            <span>+880 123 456 859</span>
        </div>
    </div>
  )
}

export default Navbar