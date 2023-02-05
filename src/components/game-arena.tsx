import Metronome from "@/metronome";
import { log } from "console";
import { FC, KeyboardEventHandler, useEffect, useState } from "react";

type GameArenaProps = {
  className?: string;
};

const GameArena: FC<GameArenaProps> = ({ className }) => {
  const [metronome, setMetronome] = useState<Metronome>();
  const [song, setSong] = useState<HTMLAudioElement>();
  // const [isFightTriggered, setIsFightTriggered] = useState(false);

  useEffect(() => {
    setMetronome(new Metronome());
    setSong(new Audio("1400.wav"));
  }, []);

  useEffect(() => {
    if (song) {
      song.volume = 0.5;
    }
    // metronome?.start();

    const handler = ({ key }: KeyboardEvent) => {
      if (key === " " && metronome) {
        // setIsFightTriggered(true);
        const timeToBeat = metronome.getTimeToNextBeat();
        console.log("🔥", timeToBeat);
      }
    };
    window.addEventListener("keydown", handler);

    return () => window.removeEventListener("keydown", handler);
  }, [metronome]);

  // useEffect(() => {
  //   if (isFightTriggered) {
  //     setIsFightTriggered(false);
  //     console.log("FIGHT!!!!");
  //   }
  // }, [isFightTriggered]);

  const stageStart = () => {
    metronome?.start();
    setTimeout(() => song?.play(), 50);
  };

  return (
    <div className={`bg-amber-400 ${className}`}>
      GameArensa
      <div onClick={stageStart} className="w-48 rounded-sm bg-green-200 p-2">
        Start
      </div>
    </div>
  );
};

export default GameArena;
