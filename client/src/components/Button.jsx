import React from 'react'

const Button = ({ text }) => {
  return (
    <button className='max-w-[160px] border-[2.5px] text-black-800 font-semibold text-lg md:text-xl uppercase box-shadow border-black md:px-3 md:py-1 p-1 rounded-lg shadow-[6px_8px___rgba(0,0,0)]'>{text}</button>
  )
}

export default Button
