import React from 'react'
import './Mobile.css'
import {Link} from 'react-router-dom'
import { useState } from 'react'
import { IoMdMenu } from "react-icons/io";


function Mobile  ()  {
    
  return (
    <div className="menu-class">
      
    <ul>
    <li>
      <div className="links">
        <Link to="/">Home</Link>
    <Link  to="/About">About</Link>
    <Link to="/Packages">Packages</Link>
    <Link to="/Gallery">Gallery</Link>
    <Link to="/Book">Book</Link>
      </div>
    
    </li>
    
  </ul>
</div>
  )
}

function Mobilemenu() {
    const [menuVisible, setMenuVisible] = useState(false);
  
    const toggleMenu = () => {
      setMenuVisible(!menuVisible);
    };
  
    return (
      <div className="menu-item">
        <div className="tap-menu">
          <button onClick={toggleMenu} className="tap-me-menu">
          <IoMdMenu/>
          </button>
          {menuVisible && <Mobile />}
        </div>
      </div>
    );
  }
  
  export default Mobilemenu