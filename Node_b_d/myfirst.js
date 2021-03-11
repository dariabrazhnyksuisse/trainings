/**
 * @Date:   2021-03-11T17:57:24+01:00
 * @Last modified time: 2021-03-11T17:59:48+01:00
 */
 
 var http = require('http');

 http.createServer(function (req, res) {
   res.writeHead(200, {'Content-Type': 'text/html'});
   res.end('Hello World!');
 }).listen(8080);
