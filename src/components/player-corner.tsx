import { FC } from "react";
import HealthBar from "./health-bar";
import PlayerHandLeft from "./player-hand-left";
import { playerHand$, playerHealth$, setPlayerHand, setPlayerCardSelected } from "@/player-state";
import { useObservable } from "@ngneat/react-rxjs";
import { useEffect, useState } from "react";
import { getHand, keysToIdexes } from "../lib/pokerHelpers";
import { ValueOf } from "next/dist/shared/lib/constants";

type PlayerCornerProps = {
  className?: string;
};


const PlayerCorner: FC<PlayerCornerProps> = ({ className }) => {
  const [hand] = useObservable(playerHand$);



  useEffect(() => {
    const downHandler = ({ key }: KeyboardEvent) => {
      // @ts-ignore
      if (keysToIdexes[key] !== undefined) {
        // @ts-ignore
        setPlayerCardSelected(keysToIdexes[key] as number, !hand[keysToIdexes[key]].selected)
      }
      if (key === ' ') {
        console.log('hit me')
      }
    };
    window.addEventListener("keydown", downHandler);
    return () => {
      window.removeEventListener("keydown", downHandler);
    }
  }, [hand]);

  useEffect(() => {
    setPlayerHand(getHand());
  }, []);


  return (
    <div
      className={`h-2/5 w-full bg-[url('/placeholders/hero_bg.png')] bg-cover ${className}`}
    >
      <div className="flex h-full w-full items-center align-middle">
        <div className="ml-20">

          <PlayerHandLeft hand={hand} />

          {/* <HealthBar
            className="absolute top-2 right-2 w-48"
            total={10}
            current={playerHealth}
          /> */}
        </div>
      </div>
    </div >
  );
};

export default PlayerCorner;
