import { setPlayerHealth } from "@/player-state";
import { FC } from "react";

type HealthBarProps = {
  className?: string;
  total: number;
  current: number;
};

const HealthBar: FC<HealthBarProps> = ({
  className,
  total = 10,
  current = 0,
}) => {
  return (
    <div
      onClick={() => {
        console.log(">>>>>>");
        setPlayerHealth(5);
      }}
      className={`w-full ${className}`}
    >
      <div className={`absolute top-0 w-full bg-red-500`} />
      <div
        className={`bg-amber-500`}
        style={{ width: `${(current / total) * 100}%` }}
      >
        {current}
      </div>
    </div>
  );
};

export default HealthBar;
