

import { FC } from "react";
import HealthBar from "./health-bar";
import PlayerHandLeft from "./player-hand-left";
import { playerHealth$ } from "@/player-state";
import { useObservable } from "@ngneat/react-rxjs";
import useKeyPress from '../hooks/useKeyPress'
import { useEffect, useState } from 'react'
import { getHand } from '../lib/pokerHelpers'

type PlayerCornerProps = {
  className?: string;
};

// pokerhandArray

const PlayerCorner: FC<PlayerCornerProps> = ({ className }) => {
  const [hand, setHand] = useState<string[]>([])


  const [playerHealth] = useObservable(playerHealth$);
  const isWPressed = useKeyPress('w')
  const isAPressed = useKeyPress('a')
  const isSPressed = useKeyPress('s')
  const isDPressed = useKeyPress('d')


  useEffect(() => {
    console.log('pressed', { isWPressed, isAPressed, isSPressed, isDPressed })
  }, [isWPressed, isAPressed, isSPressed, isDPressed])


  useEffect(() => {
    setHand(getHand())
  }, [])



  return (
    <div
      className={`h-2/5 w-full bg-[url('/placeholders/hero_bg.png')] bg-cover   ${className}`}
    >
      <div className="flex h-full w-full  items-center align-middle">
        <div className="ml-20">
          <PlayerHandLeft hand={hand} />
          <HealthBar
            className="absolute top-2 right-2 w-48"
            total={10}
            current={playerHealth}
          />
        </div>
      </div>
    </div>
  );
};

export default PlayerCorner;
