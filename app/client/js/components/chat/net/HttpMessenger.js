require('es6-promise').polyfill();
require('isomorphic-fetch');

var HttpMessenger = {
  heartbeat: function() {
    return fetch('http://localhost:3000/heartbeat', {method: 'head'});
  }
};

module.exports = HttpMessenger;
