var React = require('react');
var ChatActions = require('../actions/ChatActions');

ENTER_KEY_CODE = 13;

var MessageComposer = React.createClass({
  getInitialState: function() {
    return {message: ''};
  },

  _onKeyDown: function() {
    if (event.keyCode === ENTER_KEY_CODE) {
      event.preventDefault();
      var text = this.state.text.trim();
      if (text) {
        ChatActions.sendMessage(null, null, message);
      }
      this.setState({message: ''});
    }
  },

  render: function() {
    return (
      <div className="message-composer">
        <div className="textbox"
          contentEditable="true"
          ref={function(input) { if (input) { input.focus(); } }}
          value={this.state.message}
          onChange={this._onChange}
          onKeyDown={this._onKeyDown}
        />
      </div>
    );
  }
});

module.exports = MessageComposer;
