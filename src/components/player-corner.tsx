import { FC } from 'react'
import PlayerHandLeft from './player-hand-left'

type PlayerCornerProps = {
  className?: string
}

const PlayerCorner: FC<PlayerCornerProps> = ({ className }) => {
  return (
    <div className={`w-full bg-sky-900 p-8  ${className}`}>
      <PlayerHandLeft />
    </div>
  )
}

export default PlayerCorner
