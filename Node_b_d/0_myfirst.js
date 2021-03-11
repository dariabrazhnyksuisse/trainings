/**
 * @Date:   2021-03-11T17:57:24+01:00
 * @Last modified time: 2021-03-11T20:58:09+01:00

 Hyper Text Transfer Protocol (HTTP).
 */

var http = require('http');
/*'./' to locate the module, that means that the module is located in the same folder as the Node.js file.*/
var dt = require('./1_modules');

/* The function passed into the http.createServer() method, will be executed when someone tries to access the computer on port 8080.
200 status it is ok
The function passed into the http.createServer()
has a 'req' argument that represents the request from the client, as an object (http.IncomingMessage object).
This object has a property called "url"
*/
http.createServer(function(req, res) {

  res.writeHead(200, {
    'Content-Type': 'text/html'
  });
  res.write("The date and time are currently. Coca-cola" + dt.myDateTime());
  res.write(req.url);
  res.end();
}).listen(8080);
