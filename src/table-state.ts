import { createStore, withProps, select } from "@ngneat/elf";
import { Observable } from "rxjs";

enum CardValue {
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
}

interface PlayerProps {
  hand: CardValue[];
  health: number;
}

const playerStore = createStore(
  { name: "todos" },
  withProps<PlayerProps>({
    health: 1,
    hand: [CardValue["2C"]],
  }),
);

export const playerHealth$: Observable<PlayerProps["health"]> =
  playerStore.pipe(select(({ health }: PlayerProps) => health));

export const setPlayerHealth = (value: number) => {
  playerStore.update((state: PlayerProps) => ({ ...state, health: value }));
};

// export interface TableProps {
//   player: Player
//   arena: {
//     playerHand: Card[]
//     enemyHand: Card[]
//   }
// }

// const tableStore = createStore(
//   { name: 'todos' },
//   withProps<TableProps>({
//     player: {
//       health: 10,
//       hand: [
//         { value: '1', suit: 'd' },
//         { value: 'K', suit: 'c' },
//       ],
//     },
//     arena: {
//       playerHand: [],
//       enemyHand: [],
//     },
//   }),
// )

// export const playerHand$ = tableStore.query(
//   select((state: TableProps) => state.player.hand),
// )

// export const playerHealth$ = tableStore.query(
//   select((state: TableProps) => state.player.health),
// )