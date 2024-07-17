import React from 'react'
import HomeNavbar from '../components/HomeNavbar'
import maskGrid from '../assets/images/grid_mask2.jpg'

const Homepage = () => {
  return (
    <>
      <div className='relative w-full h-[60vh] object-cover bg-gradient-to-b from-transparent to-white '>
        <img src={maskGrid} className='w-full h-full object-cover absolute z-[-1]'/>
        <HomeNavbar />
      </div>
    </>

  )
}

export default Homepage
