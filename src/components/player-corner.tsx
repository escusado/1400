import { FC } from 'react'
import PlayerHandLeft from './player-hand-left'

type PlayerCornerProps = {
  className?: string
}

// pokerhandArray 



const PlayerCorner: FC<PlayerCornerProps> = ({ className }) => {



  return (
    <div className={`w-full bg-[url('/placeholders/hero_bg.png')] bg-cover h-2/5   ${className}`}>
      <div className='flex items-center align-middle  h-full w-full'>
        <div className='ml-20'>
          <PlayerHandLeft />
        </div>
      </div>
    </div>
  )
}

export default PlayerCorner
