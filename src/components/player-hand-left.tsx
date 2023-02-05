import { FC } from "react";
import Card from "./game-elements/Card";
import { useEffect, useState } from "react";
import { CardValue } from "./card-values.enum";

type PlayerHandLeftProps = {
  className?: string;
  hand: CardValue[];
  selectedHand?: string[];
};

const PlayerHandLeft: FC<PlayerHandLeftProps> = ({ className, hand }) => {

  return (

    <div className={`relative  h-full w-full ${className}`}>
      <div className=" border-1  relative h-[250px] w-[250px] rounded-full border border-white bg-white bg-opacity-10 shadow-lg backdrop-blur-lg ">
        {/* top */}
        {hand[0] && <div className="absolute  flex h-full w-full items-center justify-center align-middle">
          <div className="absolute -top-10 z-50 m-auto  w-1/3">

            <Card isInteractive={true} value={hand[0].value} selected={hand[0].selected} />
          </div>
        </div>}
        {/* right */}
        {hand[1] && <div className="absolute  flex h-full w-full items-center">
          <div className="absolute -right-5 z-50 w-1/3">

            <Card isInteractive={true} value={hand[1].value} selected={hand[1].selected} />
          </div>
        </div>}
        {/* bottom */}
        {hand[2] && <div className="absolute  flex h-full w-full items-center justify-center align-middle">
          <div className="absolute -bottom-10 z-50 m-auto w-1/3 ">
            <Card isInteractive={true} value={hand[2].value} selected={hand[2].selected} />
          </div>
        </div>}

        {/* left */}
        {hand[3] && <div className="absolute -mx-5 flex h-full w-full items-center">
          <div className="z-50 w-1/3">

            <Card isInteractive={true} value={hand[3].value} selected={hand[3].selected} />
          </div>
        </div>}



      </div>
    </div>
  );
};

export default PlayerHandLeft;
