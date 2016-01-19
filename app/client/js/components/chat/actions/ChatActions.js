var mcFly = require('../flux/mcfly');

var ChatActions = mcFly.createActions({
  sendMessage: function(from, to, message) {
    return {
      actionType: 'SEND_MESSAGE',
      from: from,
      to: to,
      message: message
    };
  }
});

module.exports = ChatActions;
