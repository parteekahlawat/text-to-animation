import React from 'react'
import SpaceCard from './SpaceCard'
const SpaceCards = () => {
  return (
    <div className='my-4 max-w-[60%] md:flex justify-center gap-3.5 md:flex-row lg:w-10/12 md:w-9/12'>
      <SpaceCard />
      <SpaceCard />
      <SpaceCard />
    </div>
  )
}

export default SpaceCards
