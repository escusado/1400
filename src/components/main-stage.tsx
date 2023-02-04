import { FC } from 'react'
import EnemyCorner from './enemy-corner'
import GameArena from './game-arena'
import PlayerCorner from './player-corner'

const MainStage: FC = () => {
  return (
    <div className="m-0 h-full w-full bg-amber-200 p-0">
      <EnemyCorner />
      <GameArena />
      <PlayerCorner />
    </div>
  )
}

export default MainStage
