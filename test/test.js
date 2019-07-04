(function() {
  var nx = require('next-js-core2');
  var NxLocalExpires = require('../src/next-local-expires');

  describe('Basic test', function() {
    let store;
    beforeEach(() => {
      store = new NxLocalExpires();
    });

    test('--- set ---', function() {
      store.set('exp1', {
        expires: 864000
      });
    });
  });
})();
