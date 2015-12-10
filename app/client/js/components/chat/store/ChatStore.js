var mcFly = require('../flux/mcfly');
var _ = require('lodash');

var _messages = [];

var ChatStore = mcFly.createStore({
  getMessages: function(query) {
    if (query && query.fromUserID) {
      return _.filter(_messages, {
        fromUserID: query.fromUserID
      });
    } else if (query && query.toUserID) {
      return _.filter(_messages, {
        toUserID: query.toUserID
      });
    } else {
      return _messages;
    }
  }
}, function(payload) {
  switch(payload.actionType) {
    case 'SEND_MESSAGE':
      _messages.push({
        fromUserID: payload.fromUserID,
        toUserID: payload.toUserID,
        message: payload.message
      });
      break;
    default:
      break;
  }

  ChatStore.emitChange();

  return true;
});

module.exports = ChatStore;
