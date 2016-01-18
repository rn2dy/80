var _ = require('lodash');
var React = require('react');
var Login = require('../../../login');
var ChatStore = require('../store/ChatStore');

var currentUser = Login.currentUser;

var MessagesList = React.createClass({
  mixins: [ChatStore.mixin],

  getInitialState: function() {
    return { messages: ChatStore.getMessages() };
  },

  storeDidChange: function() {
    this.setState(getMessages());
  },

  render: function() {
    var messages = _.map(this.state.messages, function(msg, index) {
      if(currentUser.id == msg.from.id) {
        return (
          <div key={index} className="message-item right">
            <span className="message-body">{msg.message}</span>
            <span className="nickname">{msg.from.nickname}</span>
          </div>
        );
      } else {
        return (
          <div key={index} className="message-item">
            <span className="nickname">{msg.from.nickname}</span>
            <span className="message-body">{msg.message}</span>
          </div>
        );
      }
    });

    return (
      <div className="message-list">{messages}</div>
    );
  }
});

module.exports = MessagesList;
