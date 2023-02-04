import { FC } from "react";
import Card from "./game-elements/Card";
import { useEffect, useState } from "react";

type PlayerHandLeftProps = {
  className?: string,
  hand: string[],
  selectedHand: string[]
}


const PlayerHandLeft: FC<PlayerHandLeftProps> = ({ className, hand }) => {
  return (
    <div className={`relative  h-full w-full ${className}`}>
      <div className=" border-1  relative h-[250px] w-[250px] rounded-full border border-white bg-white bg-opacity-10 shadow-lg backdrop-blur-lg ">
        <div className="absolute -mx-5 flex h-full w-full items-center">
          <div className="z-50 w-1/3">
            <Card isInteractive={true} value={hand[0]} />
          </div>
        </div>
        <div className="absolute  flex h-full w-full items-center">
          <div className="absolute -right-5 z-50 w-1/3">
            <Card isInteractive={true} value={hand[1]} />
          </div>
        </div>
        <div className="absolute  flex h-full w-full items-center justify-center align-middle">
          <div className="absolute -top-10 z-50 m-auto  w-1/3">
            <Card isInteractive={true} value={hand[2]} />
          </div>
        </div>
        <div className="absolute  flex h-full w-full items-center justify-center align-middle">
          <div className="absolute -bottom-10 z-50 m-auto w-1/3 ">
            <Card isInteractive={true} value={hand[3]} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerHandLeft;
