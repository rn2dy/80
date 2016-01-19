var _ = require('lodash');
var React = require('react');
var Login = require('../../../login');
var ChatStore = require('../store/ChatStore');

var currentUser = Login.currentUser;

function getFriendInfo(id) {
  return ChatStore.getFriendInfo(id);
}

function scrollToBottom(elem) {
  elem.scrollTop = elem.scrollHeight;
}

var MessagesList = React.createClass({
  mixins: [ChatStore.mixin],

  getInitialState: function() {
    return { messages: ChatStore.getMessages() };
  },

  storeDidChange: function() {
    this.setState({ messages: ChatStore.getMessages() });
  },

  componentDidMount: function() {
    scrollToBottom(this.refs.messageList);
  },

  componentDidUpdate: function() {
    scrollToBottom(this.refs.messageList);
  },

  render: function() {
    var messages = _.map(this.state.messages, function(msg, index) {
      var user = getFriendInfo(msg.from);
      if(currentUser.id == msg.from) {
        return (
          <div key={index} className="message-item right">
            <span className="message-body">{msg.message}</span>
            <span className="nickname">{currentUser.nickname}</span>
          </div>
        );
      } else {
        return (
          <div key={index} className="message-item">
            <span className="nickname">{user.nickname}</span>
            <span className="message-body">{msg.message}</span>
          </div>
        );
      }
    });

    return (
      <div className="message-list" ref="messageList">{messages}</div>
    );
  }
});

module.exports = MessagesList;
