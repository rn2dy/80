function Hands () {
  this.cards = {
    spades:   [],
    hearts:   [],
    diamonds: [],
    clubs:    [],
    jokers:   []
  };
}

var methods = {
  add: function (card) {
    this.cards[card.klass].push(card);
  }
};

Hands.prototype = Object.create(methods);

module.exports = Hands;
