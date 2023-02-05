import { Card as CardType } from "@/player-state";
import { FC } from "react";
// import Card from "./game-elements/Card";
import { useEffect, useState } from "react";
import { getHand } from "../lib/pokerHelpers";


type EnemyCornerProps = {
  className?: string;
};



const EnemyCorner: FC<EnemyCornerProps> = ({ className }) => {
  const [hand, setHand] = useState<CardType[]>([]);

  useEffect(() => {
    setHand(getHand());
  }, []);
  return (
    <div className="relative h-1/3 bg-black text-white">
      <div className="relative h-full ">
        <div className="absolute flex h-full w-full ">
          <img
            className="absolute bottom-0 max-h-[95%] "
            src="/placeholders/lumberjack.png"
            alt="enemy"
          />
        </div>


        <div className="absolute  right-0 flex  h-full items-center justify-center align-middle">
          <div className={`relative  right-5  h-full w-full ${className} flex items-center justify-center align-middle `}>
            <div className=" border-1  relative h-[250px] w-[250px] rounded-full border border-white bg-white bg-opacity-10 shadow-lg backdrop-blur-lg ">
              {/* top */}
              {hand[0] && <div className="absolute  flex h-full w-full items-center justify-center align-middle">
                <div className="absolute -top-10 z-50 m-auto  w-1/3">

                  <Card flipped={false} isInteractive={true} value={hand[0].value} selected={hand[0].selected} />
                </div>
              </div>}
              {/* right */}
              {hand[1] && <div className="absolute  flex h-full w-full items-center">
                <div className="absolute -right-5 z-50 w-1/3">

                  <Card flipped={false} isInteractive={true} value={hand[1].value} selected={hand[1].selected} />
                </div>
              </div>}
              {/* bottom */}
              {hand[2] && <div className="absolute  flex h-full w-full items-center justify-center align-middle">
                <div className="absolute -bottom-10 z-50 m-auto w-1/3 ">
                  <Card flipped={false} isInteractive={true} value={hand[2].value} selected={hand[2].selected} />
                </div>
              </div>}

              {/* left */}
              {hand[3] && <div className="absolute -mx-5 flex h-full w-full items-center">
                <div className="z-50 w-1/3">

                  <Card flipped={false} isInteractive={true} value={hand[3].value} selected={hand[3].selected} />
                </div>
              </div>}



            </div>
          </div>
        </div>

        {/* <div className="absolute flex h-full w-full justify-center">
          <div className="absolute bottom-0 h-[98%] w-3/5 border-2 border-dotted border-white ">
            
            <div className="absolute bottom-0 flex h-[60%] w-full space-x-5">
              {hand.map((card, index) => (
                <Card isInteractive={false} value={card.value} />
              ))}

            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default EnemyCorner;
