var _classes = ['spades', 'hearts', 'diamonds', 'clubs', 'jokers'];

function Card(rank, suit) {
  this.klass = _classes[suit];
  this.rank = rank;
  this.suit = suit;
}

module.exports = Card;
