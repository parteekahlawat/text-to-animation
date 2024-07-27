import React from 'react'
import icon2 from '../assets/images/random2.webp'
import { FaGithub, FaDiscord, FaLinkedin } from 'react-icons/fa'
const Footer = () => {
  return (
    <div className='w-full xl:pb-8 xl:pr-8 p-2 flex flex-col md:flex-row items-center justify-between md:px-10'>
      <div className=' p-2 flex flex-col items-center '>
        <h1 className='md:text-4xl text-2xl  font-semibold text-center '> <img src={icon2} className='inline xl:mr-2 m-1 hover:scale-110 cursor-pointer '/> OPENNOTE</h1>
        <div className='inline-flex gap-6'>
          <FaGithub className='w-8 h-auto bg-transparent hover:scale-110 cursor-pointer' />
          <FaDiscord className='w-8 h-auto bg-transparent hover:scale-110 cursor-pointer' />
          <FaLinkedin className='w-8 h-auto bg-transparent hover:scale-110 cursor-pointer' />
        </div>
      </div>
      <div className='grid grid-cols-2 gap-6  p-2 my-4'>
        <p className='md:text-lg text-center md:text-left hover:underline md:underline-offset-4 underline-offset-2 text-md font-medium'>Contact Us</p>
        <p className='md:text-lg text-center md:text-left hover:underline md:underline-offset-4 underline-offset-2 text-md font-medium'>About Us</p>
        <p className='md:text-lg text-center md:text-left hover:underline md:underline-offset-4 underline-offset-2 text-md font-medium'>Hiring</p>
        <p className='md:text-lg text-center md:text-left hover:underline md:underline-offset-4 underline-offset-2 text-md font-medium'>Documentation</p>
        <p className='md:text-lg text-center md:text-left hover:underline md:underline-offset-4 underline-offset-2 text-md font-medium'>Patch Notes</p>
        <p className='md:text-lg text-center md:text-left hover:underline md:underline-offset-4 underline-offset-2 text-md font-medium'>Terms of Service</p>
        <p className='md:text-lg text-center md:text-left hover:underline md:underline-offset-4 underline-offset-2 text-md font-medium'>Data Usage Policy</p>
        <p className='md:text-lg text-center md:text-left hover:underline md:underline-offset-4 underline-offset-2 text-md font-medium'>Privacy Policy</p>
      </div>
    </div>
  )
}

export default Footer
