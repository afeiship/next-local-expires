# next-local-expires
> LocalStorage which can be set expires

## installation
```bash
npm install -S afeiship/next-local-expires --registry=https://registry.npm.taobao.org
```

## apis
| api | params                    | description                                         |
| --- | ------------------------- | --------------------------------------------------- |
| set | inKey, inValue, inExpires | set value with expires (ms)                         |
| get | -                         | get the right value if is in time, or will get null |

## usage
```js
import NxLocalExpires from 'next-local-expires';

// code goes here:
const store = new NxLocalExpires();
store.set('login',{ token: 'YWRmajEyMzMx' }, 5*24*60*60*1000)
store.get('login');
// { token: 'YWRmajEyMzMx' }
```

## resources
- https://github.com/afeiship
