var React = require('react');
var HeaderBar = require('./components/HeaderBar.react');
var MessagesList = require('./components/MessagesList.react');
var MessageComposer = require('./components/MessageComposer.react');

var Chat = React.createClass({
  render: function() {
    return (
      <div className="chatbox">
        <HeaderBar />
        <MessagesList />
        <MessageComposer />
      </div>
    );
  }
});

module.exports = Chat;
