import { createStore, withProps, select } from "@ngneat/elf";
import { Observable } from "rxjs";
import { CardValue } from "./components/card-values.enum";

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

//Observables
export const playerHealth$: Observable<PlayerProps["health"]> =
  playerStore.pipe(select(({ health }: PlayerProps) => health));

export const playerHand$: Observable<PlayerProps["hand"]> = playerStore.pipe(
  select(({ hand }: PlayerProps) => hand),
);

export const playerHandSelected$: Observable<PlayerProps["hand"]> =
  playerStore.pipe(
    select(({ hand }: PlayerProps) => hand.filter((card) => card.selected)),
  );

//Mutations
export const setPlayerHealth = (value: number) => {
  playerStore.update((state: PlayerProps) => ({ ...state, health: value }));
};

export const setPlayerCardSelected = (index: number, value: boolean) => {
  playerStore.update((state: PlayerProps) => {
    const newHand = { ...state.hand };
    newHand[index].selected = value;
    return {
      ...state,
      hand: newHand,
    };
  });
};

export const setPlayerHand = (hand: Card[]) => {
  playerStore.update((state: PlayerProps) => ({ ...state, hand }));
};
