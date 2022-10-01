import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.svg'
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav>
      <div className='nav-container'>
        <Link className='img-link' to="/"><img className='nav-logo' src={logo} alt="logo"></img></Link>
        <ul className='nav-links'>
          <li className='nav-link'>
            <Link to="/">Home</Link>
          </li>
          <li className='nav-link'>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
