# rf-http

A express webserver module.

* static webserver
* tries to use 'rf-log'
* CROS origin requests enabled
* body parser till 50 mb
  * raw
  * json
  * urlencoded


## Getting started

>npm install rf-http

```js
var http = require('rf-http').start({
   pathsWebserver: 'dest',
   port: 3000
});


// the webserver is running on port 3000 using folder 'dest' as root
// user express 'app' for further things like
// adding middleware, websockets, etc.


/* http holds
{
 app => express app
 server => reuse the server for websocket
}
*/
```
