import React from 'react'
import blackAirplane from '../assets/images/black_airplane_doodle.png'

const Navbar = () => {
  return (
    <div className='md:mx-[2rem] lg:my-[1rem] flex flex-row items-center justify-between mx-3 my-1.5'>
      <p className='text-base lg:text-[1.5rem] text-gray-500 cursor-pointer hover:underline md:hover:underline-offset-4 hover:underline-offset-2 hover:text-black hover:scale-105'>User's Space</p>
      <img src={blackAirplane} className='w-[50px] lg:w-[70px] h-auto object-cover cursor-pointer hover:scale-105 p-1' />
    </div>
  )
}

export default Navbar
