import React, { useContext } from 'react'
import './Item.css'
import { FaBookOpen, FaWhatsapp } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Items = (props) => {
  const {id,name,price,Wifi,image,Location,Duration,Extras}=props.data;
  return (
    <div className='item-container'>    
    <div className="items">
      <div className="item">
        <img className="item-img"src={image} alt="" />
        <p>{name}</p>
        <div className="item-prices">
          <div className="item-price-new">
            <p>Price (per person):Ksh{price}</p>
          </div>
          <div className="item-price-old">
           <p>Location: {Location}</p>
          </div>
            <div className="Wifi">
             <p>WiFi:{Wifi}</p>
            </div>
            <div className="duration">
                <p>Duration: {Duration}</p>
            </div>
            <div className="duration">
                <p>Extras: {Extras}</p>
            </div>
      </div> 
      <div className="buy-buttons">
          <Link to="/Book">
            <button className='pack-btn'>  Book Now<FaBookOpen/></button></Link>
      </div>
      
      </div>
        
    </div>
      
    </div>
  )
}

export default Items