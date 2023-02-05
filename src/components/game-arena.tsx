import { FC } from "react";
import { useObservable } from "@ngneat/react-rxjs";
import { playerHand$, playerHealth$, setPlayerHand, setPlayerCardSelected } from "@/player-state";
import Card from "./game-elements/Card";
import HealthBar from "./health-bar";

type GameArenaProps = {
  className?: string;
};

const GameArena: FC<GameArenaProps> = ({ className }) => {
  const [hand] = useObservable(playerHand$);
  const [playerHealth] = useObservable(playerHealth$);
  return <div className={`bg-yellow-100 grid grid-cols-2 gap-2 h-1/3`}>
    <div className="relative flex gap-2 bg-red-200 items-center justify-center align-middle">
      {/* show selected cards  */}
      {
        hand.filter(card => card.selected).map((card, index) => {
          return <div className="bg-green-100" key={index}>
            <Card flipped={false} isInteractive={true} value={card.value} />
          </div>
        })
      }
      <HealthBar
        className="absolute bottom-0 left-0 w-[300px]"
        total={10}
        current={playerHealth}
      />
    </div>
  </div>;
};

export default GameArena;
