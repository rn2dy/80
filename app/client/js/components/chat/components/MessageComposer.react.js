var React = require('react');
var ChatActions = require('../actions/ChatActions');
var ChatStore = require('../store/ChatStore');
var Login = require('../../../login');

ENTER_KEY_CODE = 13;

var MessageComposer = React.createClass({
  getInitialState: function() {
    return {
      chatter: ChatStore.getChatter()
    };
  },

  _onKeyDown: function(event) {
    if (event.keyCode === ENTER_KEY_CODE) {
      event.preventDefault();
      var message = event.target.textContent.trim();
      if (message) {
        ChatActions.sendMessage(
          Login.currentUser.id,
          this.state.chatter.id,
          message
        );

        event.target.textContent = '';
      }
    }
  },

  render: function() {
    return (
      <div className="message-composer">
        <div className="textbox"
          contentEditable="true"
          ref={function(input) { if (input) { input.focus(); } }}
          onKeyDown={this._onKeyDown}
        />
      </div>
    );
  }
});

module.exports = MessageComposer;
