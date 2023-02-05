import { Card } from '@/player-state';
import poker from 'poker-hands';

export const pokerDeck = [
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


// keys to indexes interface


export const keysToIdexes = {
  'w': 0,
  'd': 1,
  's': 2,
  'a': 3,
}


export function shuffle(array: any) {
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



export function getHand() {
  const shuffledDeck = shuffle(pokerDeck);
  const hand = shuffledDeck.slice(0, 4);
  const selectedHand = hand.map((card: string) => {
    return {
      value: card,
      selected: false,
    };
  })
  return selectedHand;
}

export function bestGameFromHand(hand: Card[]) {
  const handValues = hand.map((card) => card.value);
  const handString = handValues.join(' ');
  const indices = [];

  let winnerHand = [];

  switch(handString) {
    // TODO: CASES FOR MORE THAN 4 CARDS
    // case poker.hasRoyalFlush(handString):
    //   return 'Royal Flush';
    // case poker.hasStraightFlush(handString):
    //   return 'Straight Flush';
    case poker.hasFourOfAKind(handString):
      const fourOfAKind = poker.hasFourOfAKind(handString);
      winnerHand = handValues.filter((c) => c.includes(fourOfAKind));
      return winnerHand;
    case poker.hasFullHouse(handString):
      const fullHouse = poker.hasFullHouse(handString);
      winnerHand = handValues.filter((c) => c.includes(fullHouse));
      return winnerHand;
    case poker.hasFlush(handString):
      const flush = poker.hasFlush(handString);
      winnerHand = handValues.filter((c) => c.includes(flush));
      return winnerHand;
      
    case poker.hasStraight(handString):
      const straight = poker.hasStraight(handString);
      winnerHand = handValues.filter((c) => c.includes(straight));
      return winnerHand;
    case poker.hasThreeOfAKind(handString):
      const threeOfAKind = poker.hasThreeOfAKind(handString);
      winnerHand = handValues.filter((c) => c.includes(threeOfAKind));
      return winnerHand;

    case poker.hasTwoPair(handString):
      const twoPair = poker.hasTwoPair(handString);
      const w1 = handValues.filter((c) => c.includes(twoPair[0]));
      const w2 = handValues.filter((c) => c.includes(twoPair[1]));
      winnerHand = [...w1, ...w2];
      return winnerHand;
    case poker.hasPair(handString):
      const pair = poker.hasPair(handString);
      winnerHand = handValues.filter((c) => c.includes(pair));
      return winnerHand;
    default:
      const highCard = poker.highestCard(handString);
      winnerHand = handValues.filter((c) => c.includes(highCard));
      return winnerHand;
  }
  
}
