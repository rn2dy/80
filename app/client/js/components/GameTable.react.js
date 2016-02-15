var React = require('react'),
    _ = require('lodash'),
    Deck = require('deck-of-cards'),
    Game = require('../game/game');

var GameTable = React.createClass({
  componentDidMount: function() {
    // create game
    var game = new Game(this.refs.gameTable);
    var self = this;
    // create players
    _.each(['north', 'east', 'south', 'west'], function (p) {
      var attrs = {
        pos: p,
        ref: self.refs[p]
      };
      game.addPlayer(attrs);
    });

    game.start();
    // var self = this;
    // var stages = _.map(players, function(p) {
    //   return {
    //     player: p,
    //     rect: self.refs[p].getBoundingClientRect(),
    //     c: 0
    //   };
    // });
    // var deck;
    // this.deck = deck = Deck(true, 2);
    // deck.mount(this.refs.gameTable);
    // deck.intro();
    // deck.send(stages);
    // deck.flat();
    // var deck;
    // this.deck = deck = Deck(true, 2);
    // deck.mount(this.refs.dispatcher);
    // _.each(deck.cards, function(card) {
    //   card.enableFlipping();
    // });
    // deck.intro();
    // deck.flat();
    // deck.shuffle();
    // deck.flat();
  },
  render: function() {
    return (
      <div className="game-table" ref="gameTable">
        <div className="stage north" ref="north"/>
        <div className="stage south" ref="south"/>
        <div className="stage east" ref="east"/>
        <div className="stage west" ref="west"/>
        <div className="stage center" ref="center"/>
      </div>
    );
  }
});

module.exports = GameTable;

