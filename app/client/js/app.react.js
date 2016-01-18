var React = require('react'),
    ReactDom = require('react-dom'),
    Game = require('./components/Game.react');

ReactDom.render(
  <Game />,
  document.getElementById('game')
);
