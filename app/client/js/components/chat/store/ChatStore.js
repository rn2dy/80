var mcFly = require('../flux/mcfly');
var _ = require('lodash');

var _chatter = { id: 2, nickname: 'Solo', active: true };
var _friendsList = [
  { id: 2, nickname: 'Solo', active: true },
  { id: 3, nickname: 'SkyWalker', active: true },
  { id: 4, nickname: 'Darth Vader', active: false }
];

var _friendsMap = _.keyBy(_friendsList, 'id');

var _messages = [
  { from: 2, to: 1, message: 'yo buddy!' },
  { from: 1, to: 2, message: 'let\'s kill it...' },
  { from: 2, to: 1, message: 'Waiting for Vadar?' },
  { from: 1, to: 2, message: 'Invite out?' },
  { from: 2, to: 1, message: 'Yep!' },
  { from: 1, to: 2, message: 'How is score lately?' },
  { from: 2, to: 1, message: 'You can check it out by hovering over my name' },
  { from: 1, to: 2, message: 'wow' }
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
  },
  getChatter: function() {
    return _chatter;
  },
  getFriendsList: function() {
    return _friendsList;
  },
  getFriendInfo: function(id) {
    return _friendsMap[id];
  }
}, function(payload) {

  switch(payload.actionType) {
    case 'SEND_MESSAGE':
      _messages.push({
        from: payload.from,
        to: payload.to,
        message: payload.message
      });
      break;
    case 'SET_CHATTER':
      _chatter = _friendsMap[payload.id];
      break;
    default:
      break;
  }

  ChatStore.emitChange();
});

module.exports = ChatStore;
