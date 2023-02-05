import Metronome from "@/metronome";
import { FC, useEffect, useState } from "react";

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
    <div className={`bg-cyan-100 ${className}`}>
      GameArensa
      <div onClick={stageStart} className="w-48 rounded-sm bg-green-200 p-2">
        Start
      </div>
      <div className={`w-48 rounded-xl p-2 ${ScoreColors[score]}`}>{score}</div>
    </div>
  );
};

export default GameArena;
