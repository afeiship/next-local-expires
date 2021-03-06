/*!
 * name: @jswork/next-local-expires
 * description: LocalStorage which can be set expires.
 * homepage: https://github.com/afeiship/next-local-expires
 * version: 1.0.0
 * date: 2020-11-22 16:08:31
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');

  var _ = nx.json || require('@jswork/next-json');
  var DEFAULT_OPTIONS = { prefix: '__EXPIRES__', expiresKey: 'expires' };
  var EMPTY_STR = '';
  var SEPARATOR = '@';

  var NxLocalExpires = nx.declare('nx.LocalExpires', {
    methods: {
      init: function (inOptions) {
        var options = nx.mix(null, DEFAULT_OPTIONS, inOptions);
        this.prefix = options.prefix;
        this.options = options;
      },
      set: function (inKey, inValue, inExpires) {
        var key = this.__key(inKey);
        localStorage.setItem(key, nx.stringify(inValue));
        localStorage.setItem(this.__expiresKey(), inExpires);
      },
      get: function (inKey) {
        var key = this.__key(inKey);
        var now = Date.now();
        var expires = localStorage.getItem(this.__expiresKey());
        if (now < expires) {
          return nx.parse(localStorage.getItem(key));
        } else {
          localStorage.removeItem(key);
          localStorage.removeItem(this.__expiresKey());
          return null;
        }
      },
      __key: function (inKey) {
        var prefix = this.prefix;
        return prefix ? [prefix, SEPARATOR, inKey].join(EMPTY_STR) : inKey;
      },
      __expiresKey: function () {
        return this.__key(this.options.expiresKey);
      }
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxLocalExpires;
  }
})();
