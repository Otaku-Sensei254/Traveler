import React from 'react'
import Navbar from '../Navbar/Navbar'
import '../Styles/About.css'
import Slider from "react-slick";
import { useRef } from 'react'
import Testimonials from '../Testimonies/Testimonials'
import testimonies from '../Testimonies/Testimonials'
const About = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };
  return (
    <>
    <Navbar/>
    <section className='About'>
      <h1>About Us</h1>
      <div className="top-stuff">
        <div className="about-left">
              <img src="https://shorturl.at/UupqC" alt="" />
                <h3>About Us</h3>
                <h2>Who We Are?</h2>
                <p>Traveler is a reservoir of expertly curated travel knowledge, providing adventure-seekers like you with practical and actionable advice about where to go, what to do and how to best prepare for your trips.

Our specific areas of expertise are travel tips and travel gear, and we publish a wide variety of articles about travel backpacks, hotel booking websites, how to find cheap flights and checked luggage.</p>
      </div>
                      {/*What our clients say about us */}
            <div className="bottom-stuff">
            <h1>Testimonies from our clients</h1>
            
          {/*------The carousel------- */}
          <div className="slide-show">
          
            {testimonies.map((d)=>(
              <div className="slider">
                <div className="pick">
                  <img src={d.image}alt="" />
                </div>
                <div className="name">
                  <h4>{d.name}</h4>
                </div>
                <div className="review">
                  <p>{d.review}</p>
                </div>
                <div className="trip">
                  <p>Trip to: {d.trip}</p>
                </div>
              </div>

            ))}
                 
          </div>
            </div>
            </div>
    </section> 
      
    </>
  )
}

export default About