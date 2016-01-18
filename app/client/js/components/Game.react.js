var React = require('react');
var Chat = require('./chat/Chat.react');

var Game = React.createClass({
  render: function() {
    return (
      <div>
        <h1>80 Points</h1>
        <Chat />
      </div>
    );
  }
});

module.exports = Game;
