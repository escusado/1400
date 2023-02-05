import { FC } from "react";
import React from "react";

import classNames from "classnames";
import { CardValue } from "../card-values.enum";

// import select car from store

function selectCard(value: CardValue) {
  console.log("select card", value);
}

type CardProps = {
  value: CardValue;
  className?: string;
  selected?: boolean;
  isInteractive: boolean;
  flipped?: boolean;
  cardContent?: React.ReactNode;
};

const Card: FC<CardProps> = ({
  className,
  value,
  isInteractive,
  selected,
  flipped = true,
}) => {
  const css = classNames(
    "aspect-[4/5] max-w-[150px] transition-all drop-shadow-md drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)]",
    className,
    isInteractive && "hover:transition-transform hover:-translate-y-5",
    selected && "-translate-y-8 brightness-150",
  );
  return (
    <div className={css} onClick={() => isInteractive && selectCard(value)}>
      <div
        className={classNames(
          "h-full cursor-pointer text-gray-800 hover:shadow-lg",
        )}
      >
        <img
          className="h-full w-full object-cover"
          src={`/deck/${value}.png`}
        />
      </div>
    </div>
  );
};

export default Card;
