import { FC } from "react";

type GameArenaProps = {
  className?: string;
};

const GameArena: FC<GameArenaProps> = ({ className }) => {
  return <div className={`bg-green-400 ${className}`}>GameArensa</div>;
};

export default GameArena;
