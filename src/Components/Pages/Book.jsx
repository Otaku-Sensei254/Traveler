import React from 'react'
import Navbar from '../Navbar/Navbar'
import '../Styles/Book.css'
import { FaBookOpen } from "react-icons/fa";

const Book = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "13b0a273-42bb-4565-985f-81dd4234104b");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Booking Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div>
        <Navbar/>
        <div className="contact-container">
        <form onSubmit={onSubmit}>
            <h2>Book Now<FaBookOpen/>!</h2>
            <div className="inputs">
            <input type="name" name='name' placeholder='enter your name' required/>
            <input type="number" name="Phone Number"placeholder='enter your phone number' required/>
            <input type="number" name="Number of people"placeholder='People(s)' required/>
            <input type="email" name="email"placeholder='enter your email' required/>
            <input type="location" name="Location"placeholder='enter your destination' required/>    
            <input type="date" name="Date" placeholder='date?'/>
            <textarea name="message"rows={6} placeholder='Write your message........'></textarea>
            </div>
            <button type="submit">Book Now<FaBookOpen/></button>
              <span>{result}</span>

        </form>
      </div>
    </div>
  )
}

export default Book