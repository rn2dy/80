var mcFly = require('../flux/mcfly');
var _ = require('lodash');

var _messages = [
  {
    from: { id: 2, nickname: 'Solo' },
    to: { id: 1, nickname: 'rn2dy' },
    message: 'yo buddy!'
  },
  {
    from: { id: 1, nickname: 'rn2dy' },
    to: { id: 2, nickname: 'Solo' },
    message: 'let\'s kill it...'
  },
  {
    from: { id: 2, nickname: 'Solo' },
    to: { id: 1, nickname: 'rn2dy' },
    message: 'Waiting for Vadar?'
  },
  {
    from: { id: 1, nickname: 'rn2dy' },
    to: { id: 2, nickname: 'Solo' },
    message: 'Invite out?'
  },
  {
    from: { id: 2, nickname: 'Solo' },
    to: { id: 1, nickname: 'rn2dy' },
    message: 'Yep!'
  },
  {
    from: { id: 1, nickname: 'rn2dy' },
    to: { id: 2, nickname: 'Solo' },
    message: 'How is score lately?'
  },
  {
    from: { id: 2, nickname: 'Solo' },
    to: { id: 1, nickname: 'rn2dy' },
    message: 'You can check it out by hovering over my name'
  },
  {
    from: { id: 1, nickname: 'rn2dy' },
    to: { id: 2, nickname: 'Solo' },
    message: 'wow'
  }
];

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
});

module.exports = ChatStore;
