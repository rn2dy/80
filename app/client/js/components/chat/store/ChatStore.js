var mcFly = require('../flux/mcfly');

var ChatStore = mcFly.createStore({
  getMessages: function() {
    return [];
  }
}, function(payload) {
  switch(payload.actionType) {

  }
});

module.exports = ChatStore;
