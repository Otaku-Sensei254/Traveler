import React from 'react'
import { useState } from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom'
import { IoMdMenu } from "react-icons/io";
import Mobilemenu from './Mobile/Mobile';
const Navbar = () => {
  return (
    <div className="nav-container">
        <nav> 
          <Link to='/'><h1 className='mobileh1'>Traveler</h1></Link>
            <li>
              <div className='Links'>
                <Link to="/"><h1 className="Logo">Traveler</h1></Link>
                <Link to="/">Home</Link>
                <Link to="/About">About</Link>
                <Link to="/Packages">Packages</Link>
                <Link to="/Gallery">Gallery</Link>
                <Link to="/Book">Book Now</Link>
              </div>
               
            </li>
          <Mobilemenu/>
        </nav>
        
    </div>
  )
}

export default Navbar