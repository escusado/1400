import { createStore, withProps, select } from "@ngneat/elf";
import { Observable } from "rxjs";
import { CardValue } from "./components/card-values.enum";

export interface Card {
  value: CardValue;
  selected: boolean;
}

export interface PlayerProps {
  hand: Card[];
  health: number;
}

const playerStore = createStore(
  { name: "player" },
  withProps<PlayerProps>({
    health: 1,
    hand: [],
  }),
);

const enemyStore = createStore(
  { name: "enemy" },
  withProps<PlayerProps>({
    health: 1,
    hand: [],
  }),
)

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
    const newHand = [...state.hand ];
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


// enemy mutations
export const setEnemyHealth = (value: number) => {
  enemyStore.update((state: PlayerProps) => ({ ...state, health: value }));
}

export const setEnemyHand = (hand: Card[]) => {
  enemyStore.update((state: PlayerProps) => ({ ...state, hand }));
}

// enemy observables

export const enemyHealth$: Observable<PlayerProps["health"]> =
  enemyStore.pipe(select(({ health }: PlayerProps) => health));

export const enemyHand$: Observable<PlayerProps["hand"]> = enemyStore.pipe(
  select(({ hand }: PlayerProps) => hand),
);

