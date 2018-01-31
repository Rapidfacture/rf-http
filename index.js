var express = require('express'); // Server Framework
var bodyParser = require('body-parser');

// logging
var log = {
   info: console.log,
   error: console.error
};
try { // try using rf-log
   log = require(require.resolve('rf-log')).customPrefixLogger('[rf-http]');
} catch (e) {}


module.exports.start = function (options) {
   options.port = options.pathsWebserver || __dirname;
   options.port = options.port || 3021;


   // -------------- webserver ------------------//
   var app = express();

   app.use(bodyParser.raw({ // support raw buffer bodies till 50Mb
      limit: '50mb'
   }));
   app.use(bodyParser.json({ // support JSON-encoded bodies till 50Mb
      extended: false,
      limit: '50mb'
   }));
   app.use(bodyParser.urlencoded({ // support URL-encoded bodies till 50Mb
      extended: false,
      limit: '50mb'
   }));

   // enable cross origin sharing (http://enable-cors.org/server_expressjs.html)
   app.use(function (req, res, next) {
      res.header('Access-Control-Allow-Credentials', true);
      // res.header("Access-Control-Allow-Origin", "*");
      res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
      res.header('Access-Control-Allow-Origin', req.headers.origin);
      res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept, X-Access-Token');
      next();
   });

   app.use(express.static(options.pathsWebserver));
   app.listen(options.port);
   log.success('Webserver created running on localhost: ' + options.port);

   return app;
};
