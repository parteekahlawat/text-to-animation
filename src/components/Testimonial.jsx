import React from 'react'
import card1 from '../assets/images/card1.png'
import card2 from '../assets/images/card2.png'
import card3 from '../assets/images/card3.png'
import card4 from '../assets/images/card4.png'
import card5 from '../assets/images/card5.png'
const Testimonial = () => {

  const cards = [
    card1,
    card2,
    card3,
    card4,
    card5,
  ]

  return (
    <div className='w-[80%] my-[2rem] mx-auto flex flex-col items-center justify-center overflow-x-hidden'>
      <h2 className='text-lg md:text-3xl lg:text-2xl md:mb-2 text-gray-500 text-center'>WHAT STUDENTS AT TOP UNIVERSITIES ARE SAYING</h2>
      <div className='w-full flex items-center justify-center gap-[2rem] animate-lin my-2'>
      {cards.map((card,index) => {
          return (
              <img src={card} key={index} className='md:w-[40%]'  />
          )
        })}
      </div>
    </div>
  )
}

export default Testimonial
