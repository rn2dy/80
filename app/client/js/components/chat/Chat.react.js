var React = require('react');
var classNames = require('classnames');
var HeaderBar = require('./components/HeaderBar.react');
var MessagesList = require('./components/MessagesList.react');
var MessageComposer = require('./components/MessageComposer.react');

var Chat = React.createClass({
  getInitialState: function() {
    return { minify: false };
  },
  toggleChat: function() {
    this.setState({ minify: !this.state.minify });
  },
  render: function() {
    var chatboxClasses = classNames({
      'chat-container': true,
      'minify': this.state.minify
    });
    return (
      <div className={chatboxClasses}>
        <i className="fa fa-minus" onClick={ this.toggleChat }></i>
        <i className="fa fa-weixin" onClick={ this.toggleChat }></i>
        <div className="chatbox">
          <HeaderBar />
          <MessagesList />
          <MessageComposer />
        </div>
      </div>
    );
  }
});

module.exports = Chat;
