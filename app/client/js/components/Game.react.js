var React = require('react');
// var Chat = require('./chat/Chat.react');
var GameTable = require('./GameTable.react');

var Game = React.createClass({
  render: function() {
    return (
      <div>
        <GameTable />
      </div>
    );
  }
});

module.exports = Game;
