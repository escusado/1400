import { FC } from "react";
import React from "react";

import classNames from "classnames";

// import select car from store

function selectCard(value: string) {
  console.log("select card", value);
}

type CardProps = {
  value: string;
  className?: string;
  selected?: boolean;
  isInteractive: boolean;
  flipped?: boolean;
  cardContent?: React.ReactNode;
};

const Card: FC<CardProps> = ({ className, value, isInteractive, selected }) => {
  const css = classNames(
    "aspect-[9/16] max-w-[150px]",
    className,
    isInteractive && "hover:transition-transform hover:-translate-y-5",
    selected && "-translate-y-5"
  );
  return (
    <div className={css} onClick={() => isInteractive && selectCard(value)}>
      <div className="h-full cursor-pointer bg-white text-gray-800  hover:shadow-lg">
        {value}
      </div>
    </div>
  );
};

export default Card;
