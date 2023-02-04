import { createStore, withProps, select } from "@ngneat/elf";
import { Observable } from "rxjs";
import { CardValue } from "./components/car-values.enum";

interface Card {
  value: CardValue;
  selected: boolean;
}

interface PlayerProps {
  hand: Card[];
  health: number;
}

const playerStore = createStore(
  { name: "todos" },
  withProps<PlayerProps>({
    health: 1,
    hand: [{ value: CardValue["2C"], selected: false }],
  }),
);

export const playerHealth$: Observable<PlayerProps["health"]> =
  playerStore.pipe(select(({ health }: PlayerProps) => health));

export const setPlayerHealth = (value: number) => {
  playerStore.update((state: PlayerProps) => ({ ...state, health: value }));
};

export const playerSelectCard = (index: number) => {
  console.log(">>>", index);
};
