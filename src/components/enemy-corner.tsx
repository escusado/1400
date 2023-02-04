import { FC } from "react";
import Card from "./game-elements/Card";
import { useEffect, useState } from "react";

type EnemyCornerProps = {
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

const EnemyCorner: FC<EnemyCornerProps> = ({ className }) => {
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
              <Card isInteractive={false} value={hand[0]} />
              <Card isInteractive={false} value={hand[1]} />
              <Card isInteractive={false} value={hand[2]} />
              <Card isInteractive={false} value={hand[3]} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnemyCorner;
