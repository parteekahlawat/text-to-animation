import React from 'react'
import logo from '../assets/images/darkmode_logo.webp'
import Button from './Button'

const HomeNavbar = () => {
  return (
    <nav>
        <div className='flex items-center md:px-20 md:py-8 fixed w-full'>
          <img src={logo} alt="logo" className='cursor-pointer' />
          <div className='flex w-full '> {/* Add hidden here for mobile devices */}
            <div className='flex md:gap-10 md:ml-10 ml-1 gap-4'>
              <button className='text-xl font-semibold opacity-90 text-black-400 hover:underline underline-offset-4 '>Pricing</button>
              <button className='text-xl font-semibold opacity-90 text-black-400 hover:underline underline-offset-4 '>FAQ</button>
            </div>
            <div className='ml-auto mr-4 flex md:gap-10 gap-4'>
              <button className='text-xl font-semibold opacity-90 text-black-400 hover:underline underline-offset-4 '>Log in</button>
              <Button text='get started' />
            </div>
          </div>
        </div>
      </nav>
  )
}

export default HomeNavbar
