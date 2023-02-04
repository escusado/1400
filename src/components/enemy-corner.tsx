import { FC } from "react";
import Card from "./game-elements/Card";

type EnemyCornerProps = {
  className?: string;
};

const EnemyCorner: FC<EnemyCornerProps> = ({ className }) => {
  return (
    <div className="relative h-1/3 bg-black text-white">
      <div className="relative h-full ">
        <div className="absolute flex h-full w-full items-center justify-center align-middle">
          <img
            className="absolute bottom-0 max-h-[95%] "
            src="/placeholders/lumberjack.png"
            alt="enemy"
          />
        </div>

        <div className="absolute flex h-full w-full justify-center    ">
          <div className="absolute bottom-0 h-[98%] w-3/5 border-2 border-dotted border-white ">
            {/* cards here */}
            <div className="absolute bottom-0 flex h-[60%] w-full space-x-5">
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnemyCorner;
