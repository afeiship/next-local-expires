/*!
 * name: next-local-expires
 * url: https://github.com/afeiship/next-local-expires
 * version: 1.0.0
 * date: 2019-07-04T14:17:11.864Z
 * license: MIT
 */

(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  var _ = nx.json || require('next-json');
  var DEFAULT_OPTIONS = { prefix: '__EXPIRES__', expKey: 'expires' };
  var EMPTY_STR = '';
  var SEPARATOR = '@';

  var NxLocalExpires = nx.declare('nx.LocalExpires', {
    methods: {
      init: function(inOptions) {
        var options = nx.mix(null, DEFAULT_OPTIONS, inOptions);
        this.prefix = options.prefix;
        this.options = options;
      },
      set: function(inKey, inValue, inExpires) {
        var key = this.__key(inKey);
        localStorage.setItem(key, nx.stringify(inValue));
        localStorage.setItem(this.__expKey(), inExpires);
      },
      get: function(inKey) {
        var key = this.__key(inKey);
        var now = Date.now();
        var expires = localStorage.getItem(this.__expKey());
        if (now < expires) {
          return nx.parse(localStorage.getItem(key));
        } else {
          localStorage.removeItem(key);
          localStorage.removeItem(this.__expKey());
          return null;
        }
      },
      __key: function(inKey) {
        var prefix = this.prefix;
        return prefix ? [prefix, SEPARATOR, inKey].join(EMPTY_STR) : inKey;
      },
      __expKey: function() {
        return this.__key(this.options.expKey);
      }
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxLocalExpires;
  }
})();

//# sourceMappingURL=next-local-expires.js.map
