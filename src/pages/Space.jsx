import { useState } from 'react';
import blackAirplane from '../assets/images/black_airplane_doodle.png'

import { FaUser, FaRegIdBadge, FaPlusSquare, FaEnvelope } from "react-icons/fa"

const Space = () => {

  const[input,setInput] = useState('');

  const handleChange = (e) => {
    setInput(e.target.value);
    
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
    setInput('');
  }

  const handleClick = (e) => {
    console.log(e);
    setInput(e.target.innerText);
  }

  return (
    <div>
      {/* <Navbar /> */}
      <nav className="flex-1 flex items-center justify-between m-2 md:m-4 xl:m-6 px-2 py-1">
        <p className="text-sm md:text-lg xl:text-xl text-gray-500 cursor-pointer hover:underline hover:text-black hover:scale-105 underline-offset-2">User's Space
          <span>
            {/* Add user's dynmaic name here with >  */ }
          </span>
        </p>
        <div className=" border-2 rounded-full border-purple-700 p-1 xl:p-2  cursor-pointer hover:scale-105">
          <FaUser className="w-4 md:w-6 xl:w-8 h-auto text-purple-900 " />
        </div>
      </nav>

      {/* <Initail Content /> */}
      <div className="mt-[1rem] md:mt-[2rem]  lg:mt-[4rem]  md:max-w-[60%] mx-auto rounded-3xl flex flex-col items-center justify-center ">
        <img src={blackAirplane} className='w-[150px] md:w-[180px] xl:w-[250px] h-auto object-cover ' />
        <h1 className='text-black font-semibold text-xl md:text-3xl lg:text-4xl xl:text-[4rem] xl:leading-[4rem]  m-1 xl:mb-10  text-center my-1 xl:text-lg md:my-2'>What do you want to learn today?</h1>
        <div className='w-[50%] md:w-[80%] grid grid-cols-1 md:grid-cols-3 gap-2 xl:gap-4 my-2 place-items-center flex items-stretch'>
          <div onClick={(e) => handleClick(e)} className='p-2 lg:px-3  xl:px-4 lg:text-lg rounded-3xl m-1 border-[4px] border-gray-200 flex md:flex-col items-center justify-center cursor-pointer hover:bg-gray-200 '>
            <FaRegIdBadge className=' mt-1 md:w-4 md:mb-2 lg:w-6 lg:mb-4 h-auto '/>
            <p className='text-center ml-1 xl:text-[1.4rem]'>Teach me about partial derivatives</p>
          </div>
          <div onClick={(e) => handleClick(e)} className='p-2 lg:px-3 xl:px-4 lg:text-lg rounded-3xl m-1  border-[4px] border-gray-200 flex md:flex-col items-center justify-center cursor-pointer hover:bg-gray-200 '>
            <FaRegIdBadge className=' mt-1 md:w-4 md:mb-2 lg:w-6 lg:mb-4 h-auto '/>
            <p className='text-center ml-1 xl:text-[1.4rem]'>I want to know about J.F.K.'s murder</p>
          </div>
          <div onClick={(e) => handleClick(e)} className='p-2 lg:px-3 xl:px-4 lg:text-lg rounded-3xl m-1  border-[4px] border-gray-200 flex md:flex-col items-center justify-center cursor-pointer hover:bg-gray-200 '>
            <FaRegIdBadge className=' mt-1 md:w-4 md:mb-2 lg:w-6 lg:mb-4 h-auto '/>
            <p className='text-center ml-1 xl:text-[1.4rem]'>How do I do matrix multiplication?</p>
          </div>
        </div>
      </div>

      { /* <Inputbar /> */   }
      <div className='absolute bottom-[2rem] w-full flex items-center justify-center'>
        <div className='w-[85%] md:w-8/12 flex flex-row items-center justify-between gap-4 bg-gray-200 px-4 py-3 rounded-full '>
          <FaPlusSquare  className='mt-2 ml-1 md:w-4 md:mb-2 lg:w-6 h-auto cursor-pointer ' />
          <form onSubmit={(e) => handleSubmit(e)} className='flex-1'>
              <input className='w-full text-black opacity-80 text-md md:text-xl xl:text-[1.4rem] focus:outline-none p-1 bg-transparent outline-none' placeholder='Teach me about...' 
              type='text'
              value={input}
              onChange={(e)=>handleChange(e)}
              ></input>
          </form>       
          <FaEnvelope onClick={(e)=>handleSubmit(e)}  className='mt-2 mr-1 md:w-4 md:mb-2 lg:w-6 h-auto cursor-pointer '/>
        </div>
      </div>


    </div>
  )
}

export default Space
