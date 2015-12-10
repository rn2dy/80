var mcFly = require('../flux/mcfly');

var ChatActions = mcFly.createActions({
  sendMessage: function(fromUserID, toUserID, message) {
    return {
      actionType: 'SEND_MESSAGE',
      fromUserID: fromUserID,
      toUserID: toUserID,
      message: message
    };
  }
});

module.exports = ChatActions;
