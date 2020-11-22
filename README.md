# next-local-expires
> LocalStorage which can be set expires.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-local-expires
```

## apis
| api | params                    | description                                         |
| --- | ------------------------- | --------------------------------------------------- |
| set | inKey, inValue, inExpires | set value with expires (ms)                         |
| get | -                         | get the right value if is in time, or will get null |

## usage
```js
import NxLocalExpires from '@jswork/next-local-expires';

// code goes here:
const store = new NxLocalExpires();
store.set('login',{ token: 'YWRmajEyMzMx' }, 5*24*60*60*1000)
store.get('login');
// { token: 'YWRmajEyMzMx' }
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-local-expires/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-local-expires
[version-url]: https://npmjs.org/package/@jswork/next-local-expires

[license-image]: https://img.shields.io/npm/l/@jswork/next-local-expires
[license-url]: https://github.com/afeiship/next-local-expires/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-local-expires
[size-url]: https://github.com/afeiship/next-local-expires/blob/master/dist/next-local-expires.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-local-expires
[download-url]: https://www.npmjs.com/package/@jswork/next-local-expires
