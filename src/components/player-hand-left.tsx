import { FC } from "react";
import Card from "./game-elements/Card";
import { useEffect, useState } from "react";

type PlayerHandLeftProps = {
  className?: string;
};

// pokerhandArray
const pokerDeck = [
  "2H",
  "3H",
  "4H",
  "5H",
  "6H",
  "7H",
  "8H",
  "9H",
  "10H",
  "JH",
  "QH",
  "KH",
  "AH",
  "2D",
  "3D",
  "4D",
  "5D",
  "6D",
  "7D",
  "8D",
  "9D",
  "10D",
  "JD",
  "QD",
  "KD",
  "AD",
  "2C",
  "3C",
  "4C",
  "5C",
  "6C",
  "7C",
  "8C",
  "9C",
  "10C",
  "JC",
  "QC",
  "KC",
  "AC",
  "2S",
  "3S",
  "4S",
  "5S",
  "6S",
  "7S",
  "8S",
  "9S",
  "10S",
  "JS",
  "QS",
  "KS",
  "AS",
];

const PlayerHandLeft: FC<PlayerHandLeftProps> = ({ className }) => {
  const [hand, setHand] = useState([]);

  function shuffle(array: any) {
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  function getHand() {
    const shuffledDeck = shuffle(pokerDeck);
    const hand = shuffledDeck.slice(0, 4);
    return hand;
  }

  useEffect(() => {
    setHand(getHand());
  }, []);

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
