jest.dontMock('../../components/chat/net/HttpMessenger');

var HttpMessenger = require('../../components/chat/net/HttpMessenger');

describe('HttpMessenger', function() {
  it('should send heart beat', function(done) {
    global.fetch = jest.genMockFn();
    HttpMessenger.heartbeat();
    expect(fetch).toBeCalledWith('http://localhost:3000/heartbeat', {method: 'head'});
  });
});
