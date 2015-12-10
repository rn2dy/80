jest.autoMockOff();

var ChatStore = require('../../components/chat/store/ChatStore');
var ChatActions = require('../../components/chat/actions/ChatActions');

describe('chat', function() {
  describe('ChatStore', function() {
    it('should get messages for a user', function() {
      var messages = ChatStore.getMessages();
      expect(messages.length).toBe(0);
    });
  });

  describe('ChatActions', function() {
    it('has sendMessage action', function() {
      var fromUserID = 1,
        toUserID = 2,
        message = "Wonderful";
      ChatActions.sendMessage(fromUserID, toUserID, message);

      var messages = ChatStore.getMessages({toUserID: toUserID});

      expect(messages).toEqual([{
        fromUserID: 1,
        toUserID: 2,
        message: "Wonderful"
      }]);
    });
  });
});
