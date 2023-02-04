import { FC } from 'react'
import PlayerHandLeft from './player-hand-left'
import useKeyPress from '../hooks/useKeyPress'
import { useEffect } from 'react'

type PlayerCornerProps = {
  className?: string
}

const PlayerCorner: FC<PlayerCornerProps> = ({ className }) => {
  const isWPressed = useKeyPress('w')
  const isAPressed = useKeyPress('a')
  const isSPressed = useKeyPress('s')
  const isDPressed = useKeyPress('d')


  useEffect(() => {
    console.log('pressed', { isWPressed, isAPressed, isSPressed, isDPressed })
  }, [isWPressed, isAPressed, isSPressed, isDPressed])


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
