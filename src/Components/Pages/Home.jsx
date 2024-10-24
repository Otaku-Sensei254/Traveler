import React from 'react'
import Navbar from '../Navbar/Navbar'
import '../Styles/Home.css'
import { FaBookOpen } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
{/*import {ChakraProvider,Menu,MenuButton,MenuList,MenuItem,Button, Box,} from "@chakra-ui/react";
import { IoIosArrowDropdown } from "react-icons/io";*/}
const Home = () => {
  return (
    <div className='Home-Box'>
     <Navbar/>
     {/*Home content */}
     <div className="home-stuff">
      <h1>HELLO TRAVELER.....!</h1>
      <text className='fontSize-2sm'>Welcome to TRAVELER....
        .Get yourself a vacation this <br/>October - December with our Offers
        </text>
     </div>
     <div className="buttons">
     <Link to="/Book" className='Book'><button className='bk'>Book Now<FaBookOpen/></button> </Link>
     <Link to="/Packages" className='Explore'><button className='ex'>Explore Trips<IoLocationSharp/></button></Link>
     </div>
     <div className="left">
      <img className="left-img"src="https://shorturl.at/mvSKk" alt="" />
     </div>
     
    </div>
  )
}

export default Home
