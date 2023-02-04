
import { FC } from 'react'
import React from 'react'

import classNames from 'classnames'

// import select car from store

function selectCard(value: string) {
  console.log('select card', value)
}


type CardProps = {
  value: string,
  className?: string,
  isInteractive: boolean,
  flipped?: boolean,
  cardContent?: React.ReactNode
}

const Card: FC<CardProps> = ({ className, value, isInteractive }) => {
  const css = classNames('aspect-[9/16] max-w-[150px]', className)
  return (
    <div className={css} onClick={() => isInteractive && selectCard(value)}>
      <div className='bg-white h-full hover:shadow-lg cursor-pointer hover:transition-transform hover:-translate-y-5 text-gray-800'>{value}</div>
    </div>
  )
}


export default Card