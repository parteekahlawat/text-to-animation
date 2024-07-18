import React from 'react'
import QnA from './QnA'

const FAQs = () => {
  return (
    <div className='flex flex-col items-center justify-center w-[80%] md:[90%] my-[2rem] mx-auto xl:w-[50%]'>
      <h1 className='text-center text-xl md:text-3xl font-bold'>FREQUENTLY ASKED QUESTIONS</h1>
      <QnA />
    </div>
  )
}

export default FAQs
