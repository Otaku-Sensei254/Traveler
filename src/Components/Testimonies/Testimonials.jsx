import React from 'react'
import testimonies from './Testimonials'
import Card from './card'

const Testimonials = () => {
  return (
    <div className='voice'>
        {testimonies.map(test=>(
            <Card list={test} id={test.id} name={test.name}/>
                 
        ))}

    </div>
  )
}

export default Testimonials;