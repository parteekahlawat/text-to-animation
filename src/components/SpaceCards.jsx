import SpaceCard from './SpaceCard';
import React from 'react'

const SpaceCards = () => {
  return (
    <div className='flex flex-row justify-between items-center mt-[4rem] '>
      <SpaceCard />
      <SpaceCard /> 
      <SpaceCard />
    </div>
  )
}

export default SpaceCards
