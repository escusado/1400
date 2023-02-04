import { playerHealth$ } from "@/table-state";
import { useObservable } from "@ngneat/react-rxjs";

import { FC } from "react";
import HealthBar from "./health-bar";
import PlayerHandLeft from "./player-hand-left";

type PlayerCornerProps = {
  className?: string;
};

// pokerhandArray

const PlayerCorner: FC<PlayerCornerProps> = ({ className }) => {
  const [playerHealth] = useObservable(playerHealth$);
  return (
    <div
      className={`h-2/5 w-full bg-[url('/placeholders/hero_bg.png')] bg-cover   ${className}`}
    >
      <div className="flex h-full w-full  items-center align-middle">
        <div className="ml-20">
          <PlayerHandLeft />
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
