import React from 'react'
import Navbar from '../Navbar/Navbar'
import Bronze from '../Packages/Data/Bronze'
import Items from '../Packages/Item/Item'
import '../Styles/Packages.css'
import Silver from '../Packages/Data/Silver'
import Gold from '../Packages/Data/Gold'
const Packages = () => {
  return (
    <div>
        <Navbar/>
      <div className="tour">
        <h1>Tour Packages</h1>
         <h1>Today’s Hot Deals</h1>
        <text>We all live in an age that belongs to the young at heart. Life that is becoming extremely fast,every single day</text>
      </div>
      <div className="pack-grid">
       
         {/*-------our Bronze packages-------*/}
        <section className='Bronze'>
          <h3>Our Bronze Packages</h3>
          <div className="Bronze-box">
            {
        Bronze.map(products=>(
                <Items data={products} id={products.id} Price={products.price}/>
              ))
            } 
        </div>
        </section>
      {/*-------our silver packages-------*/}
        <section className='Silver'>
          <h3>Our Silver Packages</h3>
        <div className="Silver-box">
            {
          Silver.map(products=>(
                <Items data={products} id={products.id} Price={products.price}/>
              ))
            } 
        </div>
        </section>
        {/*-------our Gold packages-------*/}
        <section className='Gold'>
          <h3>Our Gold Packages</h3>
        <div className=" Gold-box">
            {
          Gold.map(products=>(
                <Items data={products} id={products.id} Price={products.price}/>
              ))
            } 
        </div>
        </section>
        
      </div>
      
    </div>
  )
}

export default Packages
