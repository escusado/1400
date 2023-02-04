import { FC } from 'react'

type CardSlotProps = {
  className?: string
}

const CardSlot: FC<CardSlotProps> = ({ className }) => {
  return (
    <div className={`radius-xl h-28 w-20 bg-red-200 ${className}`}>
      CardSlot
    </div>
  )
}

export default CardSlot
