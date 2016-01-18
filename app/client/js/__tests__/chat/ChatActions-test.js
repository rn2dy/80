jest.dontMock('../../components/chat/flux/mcfly');
jest.dontMock('../../components/chat/actions/ChatActions');

var ChatActions = require('../../components/chat/actions/ChatActions');

xdescribe('ChatActions', function() {
  it('can send message', function() {
    var fromUserID = 1,
        toUserID = 2,
        message = "Wonderful";

    var promise = ChatActions.sendMessage(fromUserID, toUserID, message);

    promise.then(function(payload) {
      expect(payload).toEqual({
        actionType: 'SEND_MESSAGE',
        fromUserID: 1,
        toUserID: 2,
        message: message
      });
    });
  });
});
