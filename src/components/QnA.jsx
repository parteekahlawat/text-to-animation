import React, { useEffect, useState } from 'react'
import qna from '../data/qna.js'
// import { FaArrowDown } from 'react-icons/fa';

const QnA = () => {
    const [selectedIndex, setSelectedIndex] = useState(null);
    const handleClick = (qa) => {
        setSelectedIndex(selectedIndex === qa.id ? null : qa.id)
    }
    
  return (
    <div className='w-full px-4 py-2 mt-8'>
      {qna.map((qa, index) => {
          return (
            <div key={index} className='w-[90%] mx-auto my-4 pb-3 pl-4 border-b-2 border-gray-200'>
                <div className='w-full flex items-center justify-between mb-1'>
                    <p className='text-lg md:text-xl font-semibold  text-gray-700 hover:underline cursor-pointer' onClick={() => handleClick(qa)}>{qa.question} </p>
                </div>
                {selectedIndex === qa.id && 
                (
                    <div className='w-full flex items-center justify-between my-2'>
                        <p className='text-lg md:text-xl font-semibold  text-gray-700'>{qa.answer}</p>
                    </div>
                )}
            </div>
          )
      })}
    </div>
  )
}

export default QnA
