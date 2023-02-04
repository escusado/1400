import { FC } from "react";
import EnemyCorner from "./enemy-corner";
import GameArena from "./game-arena";
import PlayerCorner from "./player-corner";

const MainStage: FC = () => {
  return (
    <div className="m-0 flex h-full w-full flex-col bg-amber-200 p-0">
      <EnemyCorner />
      <GameArena className="flex-1" />
      <PlayerCorner />
    </div>
  );
};

export default MainStage;
