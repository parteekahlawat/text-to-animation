import React from 'react'
import HomeNavbar from '../components/HomeNavbar'
import maskGrid from '../assets/images/grid_mask2.jpg'
import Hero from '../components/Hero'
import Section1 from '../components/Section1'
import Section2 from '../components/Section2'
// import Testimonial from '../components/Testimonial'      START FROM HERE TMR

const Homepage = () => {
  return (
    <>
      <div className='w-fit'>
        <div className='relative w-full h-[55vh] object-cover bg-gradient-to-b from-transparent to-white '>
          <img src={maskGrid} className=' w-full h-full object-cover absolute z-[-1]'/>
          <HomeNavbar />
        </div>
          <Hero />
          <Section1 />
          {/* <Testimonial /> */}
          <Section2 />
      </div>
    </>

  )
}

export default Homepage
