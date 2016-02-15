var Hands = require('./hands');

function Player (attrs) {
  this.pos = attrs.pos;
  this.ref = attrs.ref;
  this.game = attrs.game;
  this.hands = new Hands();
}

var methods = {
  addToHands: function (card) {
    this.hands.add(card);
  }
};

Player.prototype = Object.create(methods);

module.exports = Player;
