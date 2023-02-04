import { FC } from 'react'
import CardSlot from './card-slot'

type PlayerHandLeftProps = {
  className?: string
}

const PlayerHandLeft: FC<PlayerHandLeftProps> = ({ className }) => {
  return (
    <div className={`relative flex h-64 w-72 ${className}`}>
      <div className="m-auto mt-10 h-52 w-52 rounded-full bg-green-200" />
      <div className="absolute top-0 h-full w-full">
        <div>
          <CardSlot className="m-auto" />
        </div>
        <div className="-mt-8 -mb-8  flex flex-row">
          <CardSlot />
          <div className="flex-1" />
          <CardSlot />
        </div>
        <div>
          <CardSlot className="m-auto" />
        </div>
      </div>
    </div>
  )
}

export default PlayerHandLeft
