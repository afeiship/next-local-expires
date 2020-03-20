(function() {
  require('@feizheng/next-js-core2');
  var NxLocalExpires = require('../src/next-local-expires');

  describe('Basic test', function() {
    let store;
    beforeEach(() => {
      store = new NxLocalExpires();
    });

    test('--- set will expires, get null ---', function(done) {
      store.set('login', { token: 'YWRmajEyMzMx' }, Date.now() + 1 * 1000);
      setTimeout(() => {
        expect(store.get('login')).toBe(null);
        done();
      }, 2000);
    });

    test('--- set will in time, get the right value ---', function(done) {
      store.set('login', { token: 'YWRmajEyMzMx' }, Date.now() + 3 * 1000);
      setTimeout(() => {
        var res = store.get('login');
        // console.log(res);
        expect(res.token).toBe('YWRmajEyMzMx');
        done();
      }, 2000);
    });
  });
})();
