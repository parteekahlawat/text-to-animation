import React from 'react'
import blackAirplane from '../assets/images/black_airplane_doodle.png'
import SpaceCards from '../components/SpaceCards'

const Space = () => {
  return (
    <>
        <div className='flex flec-row items-center justify-between bg-transparent w-full px-[2rem] py-6'>
            <p className='text-[1rem] text-gray-600 font-[400] cursor-pointer hover:text-black'>user's spaces {' >'} <span >My Space</span> </p>
            <img src={blackAirplane} className='w-[60px] h-[60px] object-cover mr-4 cursor-pointer'/>
        </div>
        <div className='relative w-full flex flex-col items-center mt-10 p-4'>
            <div className='w-6/12 flex flex-col items-center justify-center'>
                <div className='w-[200px] h-[200px] mb-4'>
                    <img src={blackAirplane} className='w-full h-full object-cover'/>
                </div>
                <h1 className='text-5xl font-bold my-2'>What do you want to learn today?</h1>
                <SpaceCards />
            </div>
        </div>
        <div className=' w-7/12 bg-gray-200 flex py-2 px-4 rounded-[24px] items-center justify-between gap-4 absolute bottom-[5rem] left-1/2 -translate-x-1/2'>
                <img src={blackAirplane} className='w-[30px] h-[30px] object-cover'/>
                <input className='flex-1 px-10 py-4 rounded-[24px] text-black-300 text-2xl font-[400] bg-transparent focus:outline-none' 
                type="text" placeholder='Teach me about...'/>
                <img src={blackAirplane} className='w-[40px] h-[40px] object-cover'/>
        </div>
        
    </>

  )
}

export default Space
