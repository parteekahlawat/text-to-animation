import React from 'react'

const Section3 = () => {
  return (
    <div className='max-w-[80%] mx-auto my-4 lg:my-[6rem]'>
      <div className='mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 border-2 border-gray-200 rounded-xl p-10'>
        <div className=' py-2 px-6 md:p-4 flex flex-col items-center md:items-start justify-center text-left mb-4 order-2' >
           <h1 className='text-2xl md:text-3xl font-semibold lg:text-5xl md:mb-2'>Made with STEM in Mind</h1>
           <p className='text-md mt-4 md:text-xl mb-1  md:mb-2 '>Opennote is built to support your STEM degree, with a focus on computer science, physics, mathematics, engineering, economics, and more. Our AI generates almost 200 coding languages, and can even run Python code right in Opennote. We also support full LaTeX typesetting for mathematical equations.</p>
        </div>        
        <div className=' flex flex-col items-center justify-center' >
            <div className='w-[90%] h-[90%] object-cover border-2 bg-gray-100 border-gray-200 rounded-xl order-1'>
              <h1 className='bg-gray-200 font-semibold text-xl pl-4' >Python</h1>
              <p className='p-4'>Code</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Section3
