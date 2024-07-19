import React from 'react'
import SpaceCards from '../components/SpaceCards'
import blackAriplane from '../assets/images/black_airplane_doodle.png'

const StartingContent = () => {
  return (

    <div className='mx-2 mt-4 px-2 flex flex-col items-center md:mt-10 lg:mt-18'>
        <div className='w-[100px] h-auto md:w-[140px] lg:w-[200px]'>
            <img src={blackAriplane}  className='w-full h-full object-cover'/>
        </div>
        <h1 className=' my-4 text-black font-semibold text-xl md:text-3xl lg:text-5xl lg:mb-[4rem]'>What do you want to learn today?</h1>
        <SpaceCards />      
    </div>

  )
}

export default StartingContent
