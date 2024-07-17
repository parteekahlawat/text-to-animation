import React from 'react'
import card1 from '../assets/images/card1.png'
import card2 from '../assets/images/card2.png'
import card3 from '../assets/images/card3.png'
import card4 from '../assets/images/card4.png'
import card5 from '../assets/images/card5.png'
const Testimonial = () => {
  return (
    <div className='mb-10 overflow-x-hidden w-10/12 mx-auto bg-gradient-to-r from-red to-white flex flex-col items-center justify-center'>
      <h2 className='text-2xl md:text-3xl lg:text-2xl md:mb-2 transform-capitalize text-gray-500 '>WHAT STUDENTS AT TOP UNIVERSITIES ARE SAYING</h2>
      <ul className='animate-lin flex items-start justify-center gap-10 z-2'>
        <div className='w-[600px]'>
            <li> <img src={card1} className='w-full object-cover' />card 1</li>
        </div>
        <div className='w-[600px]'>
            <li> <img src={card1} className='w-full object-cover' />card 1</li>
        </div>
        <div className='w-[600px]'>
            <li> <img src={card1} className='w-full object-cover' />card 1</li>
        </div>
      </ul>
    </div>
  )
}

export default Testimonial
