jest.autoMockOff();

var ChatStore = require('../../components/chat/store/ChatStore');

describe('ChatStore', function() {
  it('should get messages for a user', function() {
    var userID = 100;
    var messages = ChatStore.getMessages(userID);
    expect(messages.length).toBe(0);
  });
});
