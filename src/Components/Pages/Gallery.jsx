import React from 'react'
import Navbar from '../Navbar/Navbar'
import Picks from '../Packages/Data/Gallery'
import '../Styles/Gallery.css'
import { FaArrowDown, FaDownload } from 'react-icons/fa'

const Gallery = () => {
  return (
    <div>
        <Navbar/>
        <h1 className='h1G'>Gallery</h1>
        <h2 className='h2G'>View our images <FaArrowDown/></h2>
        <div className="photo-grid">
          {Picks.map((p)=>(
            <div className="picha">
              <img src={p.image} alt="" />
              <div className="title">
                <p>{p.name}</p>
              </div>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Gallery