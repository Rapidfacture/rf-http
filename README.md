# rf-http

A express webserver module.


##

>npm install rf-http

```js
var app = require('rf-http').start({
   pathsWebserver: 'dest',
   port: 3000
});

// the webserver is running on port 3000 using folder 'dest' as root
// user express 'app' for further things like
// adding middleware, websockets, etc.
```
