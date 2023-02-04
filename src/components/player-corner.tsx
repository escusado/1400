import { playerHealth$ } from "@/table-state";
import { useObservable } from "@ngneat/react-rxjs";

import { FC } from "react";
import HealthBar from "./health-bar";
import PlayerHandLeft from "./player-hand-left";

type PlayerCornerProps = {
  className?: string;
};

const PlayerCorner: FC<PlayerCornerProps> = ({ className }) => {
  const [playerHealth] = useObservable(playerHealth$);
  return (
    <div
      className={`relative w-full overflow-hidden bg-sky-900 p-8 ${className}`}
    >
      <PlayerHandLeft className="absolute top-0" />
      <HealthBar
        className="absolute top-2 right-2 w-48"
        total={10}
        current={playerHealth}
      />
    </div>
  );
};

export default PlayerCorner;
