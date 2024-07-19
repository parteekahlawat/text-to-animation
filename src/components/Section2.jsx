import React from 'react'
import solveVid from '../assets/images/solve_reel.mp4'

const Section2 = () => {
  return (
    <div className='max-w-[80%] mx-auto my-4 lg:my-[6rem]'>
      <div className='mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 border-2 border-gray-200 rounded-xl p-10'>
        <div className=' py-2 px-6 md:p-4 flex flex-col items-center md:items-start justify-center text-left mb-4' >
           <h1 className='text-2xl md:text-3xl font-semibold lg:text-5xl md:mb-2'>Built for Visual Learners</h1>
           <p className='text-md mt-4 md:text-xl mb-1  md:mb-2 '>Opennote's AI is one of the first multimodal input to video output models. We can generate animations from Natural Language, Handwritten notes, Images, and even your GitHub, Obsidian, and Notion workspaces. We even narrate the content for you. All automatic, at your own pace.</p>
        </div>        
        <div className=' flex items-center justify-center' >
            <video src={solveVid} autoPlay loop muted  className='object-cover border-2 border-gray-200 rounded-xl'/>
        </div>
      </div>
    </div>
  )
}

export default Section2
