import { FC } from 'react'

type GameArenaProps = {
  className?: string
}

const GameArena: FC<GameArenaProps> = ({ className }) => {
  return <div className={className}>GameArena</div>
}

export default GameArena
