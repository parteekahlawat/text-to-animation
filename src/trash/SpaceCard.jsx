import React from 'react'
import whiteAirplane from '../assets/images/black_airplane_doodle.png'
const SpaceCard = () => {
  return (
    <div className='mx-2 px-6 py-4 flex flex-col items-center justify-center border-2 border-gray-200 rounded-xl cursor-pointer hover:bg-gray-50'>
      <img src={whiteAirplane} className='w-[50px] h-[50px] object-cover mb-4'/>
      <h1 className='text-[1.5rem] font-[400] text-black-400 opacity-60 my-2 text-center'>Teach me about partial derivatives</h1>
    </div>
  )
}

export default SpaceCard
