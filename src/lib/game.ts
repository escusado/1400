// create table class
// array with poker cards
const deck =[
  '2C', '2D', '2H', '2S',
  '3C', '3D', '3H', '3S',
  '4C', '4D', '4H', '4S',
  
]



// create type for card
type Card = {
  value: string;
};

class Table {
  private _cards: Card[] = [];
  players: Player[];

  constructor() {
    this._cards = [];
    this.players = [];
  }

  get cards() {
    return this._cards;
  }

  set cards(cards: Card[]) {
    this._cards = cards;
  }

  addCard(card: Card) {
    this._cards.push(card);
  }

  removeCard(card: Card) {
    this._cards = this._cards.filter((c) => c !== card);
  }
}


// create player class

class Player {
  private _cards: Card[] = [];

  constructor() {
    this._cards = [];
  }
}

export default Table;