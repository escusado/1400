
import { FC } from 'react'
import React from 'react'

type CardProps = {
  className?: string,
  flipped?: boolean,
  cardContent?: React.ReactNode
}

const Card: FC<CardProps> = ({ flipped = true }) => {
  return (
    <div className='aspect-[9/16] max-w-[150px] '>
      {/* check if flipped */}
      {flipped ? <div className='bg-white h-full'></div> : <div className='bg-orange-100 h-full'></div>}
    </div>
  )
}


export default Card