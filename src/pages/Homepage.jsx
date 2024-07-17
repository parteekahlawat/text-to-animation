import React from 'react'
import HomeNavbar from '../components/HomeNavbar'
import maskGrid from '../assets/images/grid_mask2.jpg'
import Hero from '../components/Hero'

const Homepage = () => {
  return (
    <>
      <div>
        <div className='relative w-full h-[55vh] object-cover bg-gradient-to-b from-transparent to-white '>
          <img src={maskGrid} className='w-full h-full object-cover absolute z-[-1]'/>
          <HomeNavbar />
        </div>
          <Hero />
      </div>
    </>

  )
}

export default Homepage
