var _ = require ('lodash'),
    Player = require('./player'),
    Card = require('./card');

function Game () {
  this.players = {
    north: null,
    south: null,
    east: null,
    west: null
  };
}

var methods = {
  addPlayer: function (attrs) {
    attrs.game = this;
    var player = new Player(attrs);
    this.players[attrs.pos] = player;
  },
  start: function () {
    var cards = generate(),
        players = this.players;
    _.each(cards, function(card, i) {
      switch(i % 4) {
        case 0:
          players.north.addToHands(card);
          break;
        case 1:
          players.south.addToHands(card);
          break;
        case 2:
          players.east.addToHands(card);
          break;
        case 3:
          players.west.addToHands(card);
      }
    });

    console.log(players);
  }
};


function generate() {
  var cc = 54 * 2;
  var i, k, rank, suit;
  var cards = new Array(cc);

  for(i=cc; i; i--) {
    k = i % 54;
    rank = k % 13 + 1;
    suit = k / 13 | 0;
    cards[i-1] = new Card(rank, suit);
  }

  return _.shuffle(cards);
}

Game.prototype = Object.create(methods);

module.exports = Game;
