import React from 'react'
import Button from './Button'

const Hero = () => {
  return (
    <div className=''>
        <div className='flex flex-col items-center mx-auto min-w-[420px] w-8/12 text-center'>
            <h1 className='text-5xl mb-1 md:mb-unset md:text-[5.6rem] md:leading-[7rem] xl:leading-[8.5rem] font-semibold tracking-tighter'>Bring your notes to life</h1>
            <p className='text-2xl md:text-3xl md:leading-[2rem] xl:leading-[3.5rem] mb-4'>Enhance your education with Opennote's AI Power Learning</p>
            <Button text='Get Started' />
        </div>
    </div>
  )
}

export default Hero
