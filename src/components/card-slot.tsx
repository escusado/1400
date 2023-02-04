import { FC } from "react";
import classNames from "classnames";

type CardSlotProps = {
  className?: string;
};

const CardSlot: FC<CardSlotProps> = ({ className }) => {
  const css = classNames(className, "radius-xl h-28 w-20 bg-red-200");
  return <div className={css}>CardSlot</div>;
};

export default CardSlot;
