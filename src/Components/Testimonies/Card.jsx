import React from 'react'
import './Card.css'


const Card = (prop) => {
  const {name,trip,image}=prop.list;
  return (
    <div className='card-box'>
      <div className="card">
        <img src={image}alt="" />
        <div className="name">
          <p>{name}</p>
        </div>
        <div className="trip">
          <p>{trip}</p>
        </div>
        <div className="rating">
  <input type="radio" name="rating-1" className="mask mask-star" />
  <input type="radio" name="rating-1" className="mask mask-star" defaultChecked />
  <input type="radio" name="rating-1" className="mask mask-star" />
  <input type="radio" name="rating-1" className="mask mask-star" />
  <input type="radio" name="rating-1" className="mask mask-star" />
</div> 

      </div>
    </div>
  )
}

export default Card
