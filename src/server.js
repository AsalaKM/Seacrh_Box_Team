var http = require('http');
var router  = require('./router');
var port = process.env.PORT || 4000;


http.createServer(router).listen(port);
console.log('server listening on port', port);
