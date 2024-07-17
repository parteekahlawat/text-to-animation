import React from 'react'
import sizzleVid from '../assets/images/sizzle_reel.mp4'
const Section1 = () => {
  return (
    <div className='my-14 md:mt-20' >
      <div className='max-w-[85%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4'>
        <div className=' py-2 px-6 md:p-2 flex flex-col items-center justify-center text-center mb-4' >
           <h1 className='text-2xl md:text-5xl font-semibold lg:text-6xl md:mb-4'>Visualize Your Notes. Elevate Your Learning.</h1>
           <p className='text-md mt-4 md:text-2xl mb-1  md:mb-2 hover:underline underline-offset-2 text-gray-500 cursor-pointer '>View the full Open Beta launch video on YouTube</p>
           <p className='text-md  md:text-2xl mb-1 md:mb-2  hover:underline underline-offset-2 text-gray-500 cursor-pointer '>Read the Patch Notes, if that's your thing!</p>
        </div>
        <div className=' flex items-center justify-center' >
            <video src={sizzleVid} autoPlay loop muted  className='object-cover border-2 border-gray-200 rounded-xl'/>
        </div>
      </div>
    </div>
  )
}

export default Section1
