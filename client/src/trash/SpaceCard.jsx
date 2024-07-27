import React from 'react'
import blackAirplane from '../assets/images/black_airplane_doodle.png'
const SpaceCard = () => {
  return (
    <div className='flex flex-row md:flex-col items-center p-2 m-2 border-2 border-gray-200 rounded-xl mb-2 hover:bg-gray-100 cursor-pointer'>
      <img src={blackAirplane} className='w-[20px] h-auto md:w-[40px] lg:w-[50px] xl:w-[60px]  mr-2'/>
      <h1 className='text-gray-600 text-center md:mb-2 md:text-lg xl:my-4 xl:mx-2 xl:text-[1.6rem]'>Teach me about partial derivatives</h1>
    </div>
  )
}

export default SpaceCard
