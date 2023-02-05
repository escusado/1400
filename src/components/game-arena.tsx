import Metronome from "@/metronome";
import { FC, useEffect, useState } from "react";
import { useObservable } from "@ngneat/react-rxjs";
import {
  playerHand$,
  playerHealth$,
  setPlayerHand,
  setPlayerCardSelected,
} from "@/player-state";
import Card from "./game-elements/card";
import HealthBar from "./health-bar";

enum BeatScore {
  BAD = "BAD",
  GOOD = "GOOD",
  PERFECT = "PERFECT",
}

const ScoreColors = {
  [BeatScore.BAD]: "bg-red-200",
  [BeatScore.GOOD]: "bg-sky-200",
  [BeatScore.PERFECT]: "bg-amber-200",
};

type GameArenaProps = {
  className?: string;
};

const GameArena: FC<GameArenaProps> = ({ className }) => {
  const [metronome, setMetronome] = useState<Metronome>();
  const [song, setSong] = useState<HTMLAudioElement>();
  const [score, setScore] = useState(BeatScore.BAD);
  const [hand] = useObservable(playerHand$);
  const [playerHealth] = useObservable(playerHealth$);

  useEffect(() => {
    setMetronome(new Metronome());
    setSong(new Audio("1400.wav"));
  }, []);

  useEffect(() => {
    if (song) {
      song.volume = 0.5;
    }

    const handler = ({ key }: KeyboardEvent) => {
      if (key === " " && metronome) {
        const timeToBeat = metronome.getTimeToNextBeat();
        if (Math.abs(timeToBeat) < 0.03) {
          return setScore(BeatScore.PERFECT);
        }
        if (Math.abs(timeToBeat) < 0.1) {
          return setScore(BeatScore.GOOD);
        }
        return setScore(BeatScore.BAD);
      }
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [metronome]);

  const stageStart = () => {
    metronome?.start();
    setTimeout(() => song?.play(), 50);
  };

  return (
    <div className={`grid h-1/3 grid-cols-2 gap-2 bg-yellow-100`}>
      <div className="relative flex items-center justify-center gap-2 bg-red-200 align-middle">
        {/* show selected cards  */}
        {hand
          .filter((card) => card.selected)
          .map((card, index) => {
            return (
              <div className="bg-green-100" key={index}>
                <Card flipped={false} isInteractive={true} value={card.value} />
              </div>
            );
          })}
        <HealthBar
          className="absolute bottom-0 left-0 w-[300px]"
          total={10}
          current={playerHealth}
        />
      </div>
      <div>
        <div onClick={stageStart} className="w-48 rounded-sm bg-green-200 p-2">
          Start
        </div>
        <div className={`w-48 rounded-xl p-2 ${ScoreColors[score]}`}>
          {score}
        </div>
      </div>
    </div>
  );
};

export default GameArena;
