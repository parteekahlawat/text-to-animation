import React from 'react'
import blackAriplane from '../assets/images/black_airplane_doodle.png'
const Inputbar = () => {
  return (
    <div className='fixed bottom-[3rem] flex items-center justify-center w-full'>
        <div className='bottom-6 left-0 flex flex-row justify-between bg-gray-200 w-8/12 p-4 rounded-3xl'>
            <img src={blackAriplane} className='w-[25px] h-auto md:w-[30px] lg:w-[40px] xl:w-[45px]' />
            <form action="" className='flex-1'>
                <input className='w-full h-full ml-6 bg-transparent md:text-xl xl:text-[1.6rem] focus:outline-none text-black opacity-80' type='text' placeholder='Teach me about...' />
            </form>
            <img src={blackAriplane} className='w-[25px] h-auto md:w-[30px] lg:w-[40px] xl:w-[45px]' />
        </div>
    </div>
  )
}

export default Inputbar
