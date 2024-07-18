import React from 'react'
import HomeNavbar from '../components/HomeNavbar'
import maskGrid from '../assets/images/grid_mask2.jpg'
import Hero from '../components/Hero'
import Section1 from '../components/Section1'
import Section2 from '../components/Section2'
import Section3 from '../components/Section3'
import Testimonial from '../components/Testimonial'   
import FAQs from '../components/FAQs'   

import icon1 from '../assets/images/random1.webp'
import icon2 from '../assets/images/random2.webp'
import icon3 from '../assets/images/random3.webp'
import icon4 from '../assets/images/random4.webp'
import icon5 from '../assets/images/random5.webp'
import icon6 from '../assets/images/random6.webp'



const Homepage = () => {
  return (
    <>
      <div className='w-fit'>
        <div className='relative w-full h-[55vh] object-cover bg-gradient-to-b from-transparent to-white '>
          <img src={maskGrid} className=' w-full h-full object-cover absolute z-[-1]'/>
          <img src={icon1} className='absolute w-[60px] md:w-[80px] h-[auto] lg:w-[100px] xl:w-auto top-[10%] right-[30%]' />
          <img src={icon2} className='absolute w-[60px] md:w-[80px] h-[auto] lg:w-[100px] xl:w-auto top-[40%] left-[30%]'  />
          <img src={icon3} className='absolute w-[60px] md:w-[80px] h-[auto] lg:w-[100px] xl:w-auto bottom-[20%] right-[10%]' />
          <img src={icon4} className='absolute w-[60px] md:w-[80px] h-[auto] lg:w-[100px] xl:w-auto bottom-[10%] right-[80%]' />
          <img src={icon5} className='absolute w-[60px] md:w-[80px] h-[auto] lg:w-[100px] xl:w-auto bottom-[45%] right-[45%]' />
          <img src={icon6} className='absolute w-[60px] md:w-[80px] h-[auto] lg:w-[100px] xl:w-auto top-[25%] left-[15%]' />
          <HomeNavbar />
        </div>
          <Hero />
          <Section1 />
          <Testimonial />
          <Section2 />
          <Section3 />
          <FAQs />
      </div>
    </>

  )
}

export default Homepage
