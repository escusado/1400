import { FC } from 'react'

type PlayerCornerProps = {
  className?: string
}

const PlayerCorner: FC<PlayerCornerProps> = ({ className }) => {
  return <div className={className}>PlayerCorner</div>
}

export default PlayerCorner
